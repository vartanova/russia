import React from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { TfiClose } from "react-icons/tfi";

const Modal = ({ modalActive, setModalActive, children }) => {
  const { t } = useTranslation("travelrequestpage");

  return (
    <>
      {modalActive && (
        <div
          onClick={() => setModalActive(false)}
          className={`${
            modalActive ? "opacity-100" : "opacity-0"
          } flex items-center justify-center h-dvh w-dvw bg-[#2a2c2f53] fixed left-0 top-0 transition duration-200 overflow-y-auto`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" bg-[#2a2c2f] py-7 px-10 rounded-lg w-120"
          >
            <button
              onClick={() => setModalActive(false)}
              type="button"
              className="cursor-pointer flex justify-end w-full mb-10"
            >
              <TfiClose />
            </button>
            <div className="font-bold flex justify-center mb-7">
              <h1 className="text-2xl">{t("editableform.title")}</h1>
            </div>
            <div className="flex flex-col gap-4 mb-10">
              <div>
                <p className="mb-2 text-[14px]">{t("columns.destination")}</p>
                <input
                  type="text"
                  name="destination"
                  placeholder={t("editableform.inputs")}
                  className="outline-none border rounded-4xl px-3 py-2 w-full break-all"
                />
              </div>
              <div>
                <p className="mb-2 text-[14px]">{t("columns.dateStart")}</p>
                <input
                  type="text"
                  name="destination"
                  placeholder={t("editableform.inputs")}
                  className="outline-none border rounded-4xl px-3 py-2 w-full"
                />
              </div>
              <div>
                <p className="mb-2 text-[14px]">{t("columns.dateEnd")}</p>
                <input
                  type="text"
                  name="destination"
                  placeholder={t("editableform.inputs")}
                  className="outline-none border rounded-4xl px-3 py-2 w-full"
                />
              </div>
            </div>
              <div className="flex justify-end">
                <button className="cursor-pointer focus:underline underline-offset-3 decoration-1 under" type="button">{t("editableform.btns.save")}</button>
              </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
