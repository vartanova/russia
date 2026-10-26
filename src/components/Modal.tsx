
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { TfiClose } from "react-icons/tfi";

import { schema } from "../pages/travel/travelSchema";
import { applyDateMask } from "../pages/travel/dateMask";

import type { TravelFormData } from "../api/travel";

type ModalProps = {
  editForm: TravelFormData;
  isPending: boolean;
  setModalActive: (value: boolean) => void;
  handleEditFormSubmit: (data: TravelFormData) => Promise<void>;
};

const INPUT_CLASSNAME =
  "placeholder-[#2A2C2F] text_dark outline-none border-b border-[#2A2C2F] py-2 w-full";

const ERROR_CLASSNAME = "error pt-2 text-xs italic max-w-[260px]";

export const Modal = ({
  editForm,
  isPending,
  setModalActive,
  handleEditFormSubmit,
}: ModalProps) => {
  const { t } = useTranslation("travelrequestpage");
  const { t: tError } = useTranslation("error");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TravelFormData>({
    defaultValues: editForm,
    resolver: yupResolver(schema(tError)),
  });

  const closeModal = () => {
    if (isPending) return;

    setModalActive(false);
  };

  const dateStartField = register("dateStart");
  const dateEndField = register("dateEnd");

  return (
    <div
      onClick={closeModal}
      className="fixed left-0 top-0 z-50 flex h-dvh w-dvw items-center justify-center overflow-y-auto bg-[#2a2c2f53]"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-travel-title"
        onClick={(event) => event.stopPropagation()}
        className="bg-white py-7 px-10 rounded-lg w-120 max-w-[calc(100%-2rem)]"
      >
        <button
          onClick={closeModal}
          type="button"
          disabled={isPending}
          aria-label="Закрыть"
          className="cursor-pointer flex justify-end w-full mb-5 disabled:opacity-50"
        >
          <TfiClose
            style={{
              fill: "#4e6813",
              stroke: "#4e6813",
              strokeWidth: 1,
            }}
          />
        </button>

        <h1
          id="edit-travel-title"
          className="travel__title font-bold text-3xl mb-10"
        >
          {t("editableform.title")}
        </h1>

        <form
          onSubmit={handleSubmit(handleEditFormSubmit)}
          className="flex flex-col gap-6 mb-10"
        >
          <div>
            <label
              htmlFor="edit-destination"
              className="text_dark text-[14px]"
            >
              {t("columns.destination")}
            </label>

            <input
              id="edit-destination"
              type="text"
              {...register("destination")}
              placeholder={t("editableform.inputs")}
              aria-invalid={Boolean(errors.destination)}
              className={INPUT_CLASSNAME}
            />

            <p className={ERROR_CLASSNAME}>
              {errors.destination?.message}
            </p>
          </div>

          <div>
            <label
              htmlFor="edit-date-start"
              className="text_dark text-[14px]"
            >
              {t("columns.dateStart")}
            </label>

            <input
              id="edit-date-start"
              type="text"
              {...dateStartField}
              onChange={(event) => {
                event.target.value = applyDateMask(event.target.value);
                void dateStartField.onChange(event);
              }}
              placeholder={t("editableform.inputs")}
              aria-invalid={Boolean(errors.dateStart)}
              className={INPUT_CLASSNAME}
            />

            <p className={ERROR_CLASSNAME}>
              {errors.dateStart?.message}
            </p>
          </div>

          <div>
            <label
              htmlFor="edit-date-end"
              className="text_dark text-[14px]"
            >
              {t("columns.dateEnd")}
            </label>

            <input
              id="edit-date-end"
              type="text"
              {...dateEndField}
              onChange={(event) => {
                event.target.value = applyDateMask(event.target.value);
                void dateEndField.onChange(event);
              }}
              placeholder={t("editableform.inputs")}
              aria-invalid={Boolean(errors.dateEnd)}
              className={INPUT_CLASSNAME}
            />

            <p className={ERROR_CLASSNAME}>
              {errors.dateEnd?.message}
            </p>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bg-[#4e6813] cursor-pointer border rounded-4xl px-4.5 py-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? "Сохранение..." : t("editableform.btns.save")}
          </button>
        </form>
      </div>
    </div>
  );
};
