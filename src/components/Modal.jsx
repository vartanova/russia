import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TfiClose } from "react-icons/tfi";
import { schema } from "../pages/travel/travelSchema";
import { applyDateMask } from "../pages/travel/dateMask";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Modal = ({
  modalActive,
  setModalActive,
  children,
  handleEditFormSubmit,
  handleEditForm,
  editForm,
}) => {
  const { t } = useTranslation("travelrequestpage");
  const { t: tError } = useTranslation("error");

  const {
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    values: editForm,
    resolver: yupResolver(schema(tError)),
  });
  console.log("errors", errors);
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [destination, setDestination] = useState();

  return (
    <>
      <div
        onClick={() => setModalActive(false)}
        className={`${
          modalActive ? "opacity-100" : "opacity-0"
        } flex items-center justify-center h-dvh w-dvw bg-[#2a2c2f53] fixed left-0 top-0 transition duration-200 overflow-y-auto`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className=" bg-white py-7 px-10 rounded-lg w-120"
        >
          <div>
            <button
              onClick={() => setModalActive(false)}
              type="button"
              className="cursor-pointer flex justify-end w-full mb-5"
            >
              <TfiClose
                style={{
                  fill: "#4e6813",
                  stroke: "#4e6813",
                  strokeWidth: "1",
                }}
              />
            </button>
          </div>
          <div className="font-bold flex justify-start mb-10">
            <h1 className="travel__title text-3xl">
              {t("editableform.title")}
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(handleEditFormSubmit)}
            className="flex flex-col gap-6 mb-10"
          >
            <div>
              <p className="text_dark text-[14px]">
                {t("columns.destination")}
              </p>
              <input
                type="text"
                name="destination"
                value={editForm.destination ?? ""}
                onChange={(e) => {
                  const val = e.target.value;
                  e.target.value = val;
                  handleEditForm(e);
                  setDestination(val);
                  setValue("destination", val);
                }}
                placeholder={t("editableform.inputs")}
                className="placeholder-[#2A2C2F] text_dark outline-none border-b border-[#2A2C2F] py-2 w-full"
              />
              <p className="error pt-2 text-xs italic max-w-[260px]">
                {errors.destination?.message}
              </p>
            </div>
            <div>
              <p className="text_dark text-[14px]">{t("columns.dateStart")}</p>
              <input
                type="text"
                name="dateStart"
                value={editForm.dateStart ?? ""}
                onChange={(e) => {
                  const masked = applyDateMask(e.target.value);
                  e.target.value = masked;
                  handleEditForm(e);
                  setDateStart(masked);
                  setValue("dateStart", masked);
                }}
                placeholder={t("editableform.inputs")}
                className="placeholder-[#2A2C2F] text_dark outline-none border-b border-[#2A2C2F] py-2 w-full"
              />
              <p className="error pt-2 text-xs italic max-w-[260px]">
                {errors.dateStart?.message}
              </p>
            </div>
            <div>
              <p className="text_dark text-[14px]">{t("columns.dateEnd")}</p>

              <input
                type="text"
                name="dateEnd"
                value={editForm.dateEnd ?? ""}
                onChange={(e) => {
                  const masked = applyDateMask(e.target.value);
                  e.target.value = masked;
                  handleEditForm(e);
                  setDateEnd(masked);
                  setValue("dateEnd", masked);
                }}
                placeholder={t("editableform.inputs")}
                className="placeholder-[#2A2C2F] text_dark outline-none border-b border-[#2A2C2F] py-2 w-full"
              />
              <p className="error pt-2 text-xs italic max-w-[260px]">
                {errors.dateEnd?.message}
              </p>
            </div>
            <button
              className="bg-[#4e6813] cursor-pointer border rounded-4xl px-4.5 py-1"
              type="submit"
            >
              {t("editableform.btns.save")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
