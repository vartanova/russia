import React from "react";
import { places } from "../assets/places/places";

const Places = () => {
  return (
    <div>
      {places.map((place, index) => (
        <div key={index} className="mb-20 grid grid-cols-2 gap-12 xl:px-[100px] max-[768px]:grid-cols-1 max-[768px]:gap-8 max-[768px]:mb-[50px]">
          <h1 className="font-black text-7xl max-w-[460px] max-[768px]:text-[32px]">{place.title}</h1>
          <div className="flex flex-col justify-end">
            <span className="uppercase text-xs">url</span>
            <a href={place.url} className="underline underline-offset-3 decoration-1 under cursor-pointer">
              {place.urlText}
            </a>
          </div>
          <img className="w-full" src={place.image} alt="image" />
          {/* img при 320px убрать вылезти из основного контейнера, чтоб быть без отступов */}
          <div className="flex flex-col gap-[26px]">
            <div>{place.text1}</div>
            {place.text2}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Places;
