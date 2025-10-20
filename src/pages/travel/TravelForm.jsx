import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TravelPurpose from "./TravelPurpose";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SwitchLocale from "../../components/SwitchLocale";
import BtnBack from "../../components/BtnBack";
import { schema } from "./travelSchema";
import { applyDateMask } from "./dateMask";

const TravelForm = () => {
  const { t } = useTranslation("travelpage");

  const { t: tError } = useTranslation("error");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema(tError)),
  });

  const onSubmit = (data) => {
    console.log(data);
    setTimeout(function () {
      alert("Ваша поездка создана");
    }, 3000);
    reset();
  };

  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();

  // const [value, setValue] = useState()
  const dateStartRef = useRef(null);
  const dateEndRef = useRef(null);

  // useEffect(() => {
  //   if (dateStartRef.current) {
  //     setValue("dateStart", applyDateMask(dateStartRef.current))
  //   }
  //   if (dateEndRef.current) {
  //     setValue("dateEnd", applyDateMask(dateEndRef.current))

  //   }
  // }, []);

  return (
    <div className="travel min-h-screen px-12 py-10 pb-20 flex flex-col items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-auto px-9 py-9 border rounded-4xl backdrop-blur-lg bg-[#2a2c2f23] max-md:w-[500px] max-sm:w-[300px] max-sm:text-xs"
      >
        <div className="flex justify-between items-center mb-10 max-sm:mb-5">
          <h1 className="font-bold text-3xl pt-3.5">{t("title")}</h1>
          <SwitchLocale />
        </div>
        <div className="mb-7 max-sm:mb-5">
          <p className="pb-2.5">{t("destination.p")}</p>
          <input
            {...register("destination")}
            type="text"
            placeholder={t("destination.placeholder")}
            className="bg-[#ffffff68] w-full h-10 border solid rounded-sm outline-none px-5 py-2.5 placeholder:text-white placeholder:text-xs"
            eroro
          />
          <p className="error pt-2 text-xs italic">
            {errors.destination?.message}
          </p>
        </div>
        <div className="mb-7 flex gap-5 max-md:flex-col max-sm:gap-2.5 max-sm:mb-5">
          <div>
            <p className="pb-2.5">{t("datestart.p")}</p>

            <input
              // onChange={(e) => setDateStart(applyDateMask(e.target.value))}
              onChange={(e) => {
                const masked = applyDateMask(e.target.value);
                setDateStart(masked);
                e.target.value = masked;
              }}
              value={dateStart}
              ref={dateStartRef}
              type="text"
              {...register("dateStart")}
              placeholder={t("datestart.placeholder")}
              className="bg-[#ffffff68] px-5 py-2.5 border solid rounded-sm outline-none cursor-pointer placeholder:text-white placeholder:text-xs max-md:w-full"
              error={errors}
            />
            <p className="error pt-2 text-xs italic">
              {errors.dateStart?.message}
            </p>
          </div>
          <div>
            <p className="pb-2.5">{t("dateend.p")}</p>
            <input
              // onChange={(e) => setDateEnd(applyDateMask(e.target.value))}
              value={dateEnd}
              type="text"
              ref={dateEndRef}
              onChange={(e) => {
                const masked = applyDateMask(e.target.value);
                setDateEnd(masked);
                e.target.value = masked;
              }}
              {...register("dateEnd")}
              placeholder={t("dateend.placeholder")}
              className="bg-[#ffffff68] px-5 py-2.5 border solid rounded-sm outline-none cursor-pointer placeholder:text-white placeholder:text-xs max-md:w-full"
            />
            <p className="error pt-2 text-xs italic">
              {errors.dateEnd?.message}
            </p>
          </div>
        </div>
        <div className="mb-7 max-sm:mb-5">
          <p className="pb-2.5">{t("purpose.p")}</p>
          <TravelPurpose />
        </div>
        <div className="mb-7 max-sm:mb-5">
          <p className="pb-2.5">{t("notes.p")}</p>
          <textarea
            type="text"
            name="notes"
            className="bg-[#ffffff68] resize-none  w-full break-all border solid rounded-sm outline-none px-5 py-2.5 placeholder:text-white placeholder:text-xs"
            placeholder={t("notes.placeholder")}
          />
        </div>
        <div className="flex justify-between items-center">
          <Link to="/">
            <BtnBack />
          </Link>
          <button
            type="submit"
            className="px-5 py-1.5 cursor-pointer border solid rounded-sm outline-none focus:underline underline-offset-3 decoration-1 under"
          >
            {t("btn")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TravelForm;
