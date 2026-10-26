import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { ToastContainer, Slide, toast } from "react-toastify";

import { Modal } from "../../components/Modal"
import SwitchLocale from "../../components/SwitchLocale";
import Table from "../../components/Table";
import ButtonBack from "../../components/ButtonBack";
import { columns } from "../../constants/columns";
import {
  getTravelRequests,
  updateTravelRequest,
} from "../../api/travel";
import type { TravelRow, TravelFormData } from "../../api/travel";
import { supabase } from "../../lib/supabase";

type TravelRequestPageProps = {
  pt?: string;
  travel__title?: string;
};

export type IRow = TravelRow;

const EMPTY_FORM: TravelFormData = {
  destination: "",
  dateStart: "",
  dateEnd: "",
};

const TravelRequestPage = ({
  travel__title = "travel__title",
  pt,
}: TravelRequestPageProps) => {
  const { t } = useTranslation("travelrequestpage");

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rows, setRows] = useState<IRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");

  const [modalActive, setModalActive] = useState(false);
  const [editRowId, setEditRowId] = useState<string | null>(null);
  const [selectedRow, setSelectedRow] = useState<IRow | null>(null);
  const [editForm, setEditForm] = useState<TravelFormData>({
    ...EMPTY_FORM,
  });

  useEffect(() => {
    const { data: { subscription } } =
      supabase.auth.onAuthStateChange((_event, session) => {
        setIsAuthenticated(Boolean(session?.user));
        setIsCheckingAuth(false);
      });

    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error("Ошибка проверки сессии:", error);
      }

      setIsAuthenticated(Boolean(data.session?.user));
      setIsCheckingAuth(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      setRows([]);
      setIsLoading(false);
      return;
    }

    let cancelled = false;

    const loadRequests = async () => {
      setIsLoading(true);

      try {
        const requests = await getTravelRequests();

        if (!cancelled) {
          setRows(requests);
        }
      } catch (error) {
        console.error("Ошибка загрузки поездок:", error);

        if (!cancelled) {
          toast.error("Не удалось загрузить поездки");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    loadRequests();

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated]);

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSigningIn(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setPassword("");
      toast.success("Вход выполнен!");
    } catch (error) {
      console.error("Ошибка авторизации:", error);
      toast.error("Неверные данные для входа");
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("Не удалось выйти из аккаунта");
      return;
    }

    setRows([]);
    setModalActive(false);
    setEditRowId(null);
    setEmail("");
    setPassword("");
  };

  const handleRowId = (row: IRow) => {
    setSelectedRow(row);
    setModalActive(true);
  };


  const handleEditFormSubmit = async (data: TravelFormData) => {
    if (!selectedRow || isEditing) return;

    setIsEditing(true);

    try {
      const updatedRow = await updateTravelRequest(selectedRow.id, data);

      setRows((prev) =>
        prev.map((row) =>
          row.id === updatedRow.id ? updatedRow : row,
        ),
      );

      setSelectedRow(null);
      setModalActive(false);

      toast.success("Поездка отредактирована!");
    } catch (error) {
      console.error("Ошибка редактирования поездки:", error);
      toast.error("Не удалось отредактировать поездку");
    } finally {
      setIsEditing(false);
    }
  };


  const filteredRows = rows.filter((row) =>
    row.destination.toLowerCase().includes(search.toLowerCase().trim()),
  );

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Проверка авторизации...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5">
        <form
          onSubmit={handleSignIn}
          className="w-full max-w-sm flex flex-col gap-5 border rounded-2xl p-8 backdrop-blur-lg bg-[#52525233]"
        >
          <h1 className="text-2xl font-bold">
            Вход для администратора
          </h1>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            autoComplete="username"
            required
            className="w-full border rounded-sm p-3 bg-[#ffffff20] outline-none"
          />

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Пароль"
            autoComplete="current-password"
            required
            className="w-full border rounded-sm p-3 bg-[#ffffff20] outline-none"
          />

          <button
            type="submit"
            disabled={isSigningIn}
            className="border rounded-sm p-3 cursor-pointer disabled:opacity-50"
          >
            {isSigningIn ? "Вход..." : "Войти"}
          </button>
        </form>

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          transition={Slide}
        />
      </div>
    );
  }

  return (
    <div className="travel__requests min-h-screen px-14 py-10 pb-20 flex flex-col gap-10 max-[500px]:px-7 max-[500px]:py-7">
      <div className="flex items-start">
        <div className="flex justify-between w-full max-sm:mb-5">
          <div className="max-[884px]:w-[300px]">
            <h1
              className={`relative flex items-start font-bold leading-27 ${travel__title} text-9xl mb-4 w-[700px] max-[884px]:text-7xl max-[884px]:leading-16 max-[580px]:text-2xl max-[580px]:mb-0`}
            >
              {t("title")}
            </h1>

            <div className="flex items-center gap-12 w-[700px] max-[604px]:block">
              <p className="w-1/2 travel__title max-[884px]:w-1/2 max-[580px]:text-xs max-[580px]:w-2/3 max-[604px]:pb-2.5 max-[450px]:w-1/2">
                {t("subtitle")}
              </p>

              <div className="flex items-center justify-center cursor-pointer bg-[#4e6813] rounded-lg w-35 max">
                <ButtonBack />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[170px] flex flex-col items-end gap-3 max-[604px]:items-end max-[500px]:h-[100px] max-[580px]:absolute max-[580px]:top-[100px] max-[580px]:h-[120px]">
          <SwitchLocale
            travel__title={travel__title}
            pt={`${pt}`}
          />

          <button
            type="button"
            onClick={handleSignOut}
            className="border rounded-sm px-3 py-1 cursor-pointer"
          >
            Выйти
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mx-50 p-9 border rounded-4xl backdrop-blur-lg bg-[#52525233] max-[960px]:mx-0 max-[580px]:p-4 max-[580px]:rounded-2xl max-[1140px]:mx-20 min-[1650px]:mx-100">
        <div className="w-full flex items-center rounded-lg bg-[#ffffff20]">
          <div className="pl-2.5">
            <PiMagnifyingGlassThin />
          </div>

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t("placeholder")}
            className="w-full h-10 outline-none px-2.5 placeholder:text-white placeholder:text-xs max-[450px]:text-[8px] max-[450px]:placeholder:text-[8px] max-[450px]:h-6"
          />
        </div>

        {isLoading ? (
          <p className="py-5 text-center">Загрузка поездок...</p>
        ) : (
          <Table
            setRows={setRows}
            columnDef={columns}
            data={filteredRows}
            handleRowId={handleRowId}
          />
        )}
      </div>

      {modalActive && selectedRow && (
        <Modal
          key={selectedRow.id}
          editForm={selectedRow}
          isPending={isEditing}
          setModalActive={setModalActive}
          handleEditFormSubmit={handleEditFormSubmit}
        />
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  );
};

export default TravelRequestPage;
