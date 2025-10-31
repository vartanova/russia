import { t } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SwitchLocale from "../../components/SwitchLocale";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import Table from "../../components/Table";
import ButtonBack from "../../components/ButtonBack";
import Modal from "../../components/Modal";
import { columns } from "../../constants/columns";
import db from "../../constants/db.json";
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = import.meta.env.VITE_API_URL;

const TravelRequestPage = ({ travel__title = "travel__title", pt }) => {
  const { t } = useTranslation("travelrequestpage");

  const [modalActive, setModalActive] = useState(false);
  const [rows, setRows] = useState(db.newtravel);
  const [editRowId, setEditRowId] = useState(null);
  const [editForm, setEditForm] = useState({
    destination: "",
    dateStart: "",
    dateEnd: "",
  });

  const handleRowId = (e, row) => {
    e.preventDefault();
    setEditRowId(row.id);

    setEditForm({
      destination: row.destination,
      dateStart: row.dateStart,
      dateEnd: row.dateEnd,
    });
    setModalActive(true);
  };
  const handleEditForm = (e) => {
    e.preventDefault();

    const nameOfForm = e.target.name;
    const valueOfForm = e.target.value;

    const newFormData = { ...editForm };
    newFormData[nameOfForm] = valueOfForm;

    setEditForm(newFormData);
  };

  const handleEditFormSubmit = async (data) => {
    const editedRow = {
      id: editRowId,
      destination: data.destination,
      dateStart: data.dateStart,
      dateEnd: data.dateEnd,
    };

    try {
      const response = await fetch(`${BASE_URL}/newtravel/${editRowId}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedRow),
      });

      if (!response.ok) throw new Error("Ошибка при редактировании");

      const newRow = [...rows];

      const index = rows.findIndex((row) => row.id === editRowId);

      newRow[index] = editedRow;

      setRows(newRow);
      setEditRowId(null);
      toast.success("Поездка отредактирована!");
      setModalActive(false);
    } catch (error) {
      toast.error("Не удалось отредактировать поездку: " + error.message);
    }
  };

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
        <div
          className={`h-[170px] flex items-start max-[604px]:items-end max-[500px]:h-[100px] max-[580px]:absolute max-[580px]:top-[100px] max-[580px]:h-[120px]`}
        >
          <SwitchLocale travel__title={`${travel__title}`} pt={`${pt}`} />
        </div>
      </div>
      <div className="flex flex-col gap-2 mx-50 p-9 border rounded-4xl backdrop-blur-lg bg-[#52525233] max-[960px]:mx-0 max-[580px]:p-4 max-[580px]:rounded-2xl max-[1140px]:mx-20 min-[1650px]:mx-100">
        <div className="w-full flex items-center rounded-lg bg-[#ffffff20]">
          <div className="pl-2.5">
            <PiMagnifyingGlassThin />
          </div>
          <input
            type="text"
            placeholder={t("placeholder")}
            className=" w-full h-10 outline-none px-2.5 placeholder:text-white placeholder:text-xs max-[450px]:text-[8px] max-[450px]:placeholder:text-[8px] max-[450px]:h-6"
          />
        </div>
        <Table
          modalActive={modalActive}
          setModalActive={setModalActive}
          setRows={setRows}
          columnDef={columns}
          data={rows}
          handleRowId={handleRowId}
        />
      </div>
      {modalActive && (
        <Modal
          setRows={setRows}
          editForm={editForm}
          handleEditForm={handleEditForm}
          modalActive={modalActive}
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
