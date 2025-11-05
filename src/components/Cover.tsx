import React from "react";
import backgroundImg from "./../assets/cover__backgroundPhoto.jpg"

import { useTranslation } from "react-i18next";


const Cover = () => {
  const { t } = useTranslation("cover");
  
  return (
    <div className="grid grid-cols-1 xl:px-12 bg-[#2A2C2F] pb-[92px]">
      <img
        className="col-start-1 row-start-1 z-0 opacity-70"
        src={backgroundImg}
        alt="cover__backgroundPhoto"
      />

      <div className="col-start-1 row-start-1 z-1 bg-transparent hover:bg-[#2a2c2f80] transition duration-700">
        <a href="https://stampsy.com/na-elektrichkakh-do-baikala">
          <div className="flex flex-col justify-center items-center text-center h-full">
            <h1 className="font-black text-7xl  max-w-[560px] mb-8 max-[600px]:text-[32px] max-[600px]:max-w-[250px]">
              {t("title")}
            </h1>
            <p className="text-lg max-w-[360px] max-[600px]:text-[14px]">
              {t("paragraph")}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Cover;
