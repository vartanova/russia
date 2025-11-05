import React from "react";
import { places } from "../assets/places";
import { useTranslation } from "react-i18next";

const Places = () => {
  const { t } = useTranslation("places");

  return (
    <div>
      {places.map((place, index) => (
        <div
          key={index}
          className="mb-20 grid grid-cols-2 gap-12 xl:px-[100px] max-[768px]:grid-cols-1 max-[768px]:gap-8 max-[768px]:mb-[50px]"
        >
          <h1 className="font-black text-7xl max-w-[460px] max-[768px]:text-[32px]">
            {t(place.title)}
          </h1>
          <div className="flex flex-col justify-end">
            <span className="uppercase text-xs">url</span>
            <a
              href={place.url}
              className="underline underline-offset-3 decoration-1 under cursor-pointer"
            >
              {place.urlText}
            </a>
          </div>
          <img
            className="relative w-screen max-w-none left-1/2 -translate-x-1/2 object-cover md:h-auto md:left-0 md:translate-x-0 md:w-full"
            src={place.image}
            alt="image"
          />
          <div className="flex flex-col gap-[26px]">
            <div>{t(place.text1)}</div>
            {t(place.text2 ?? "")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Places;
