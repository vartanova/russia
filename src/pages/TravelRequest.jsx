import React from "react";
import travelRequestBg from "../assets/travelRequestBg.jpg";
import TravelPurpose from "../components/TravelPurpose";

const TravelRequest = () => {
  return (
    <div className="travel min-h-screen px-12 py-10 pb-20 flex flex-col items-center">
      <div className="w-auto px-9 py-9 border rounded-4xl backdrop-blur-lg bg-[#2a2c2f23] ">
        <h1 className="pb-10 font-bold text-3xl ">Новая поездка</h1>
        <div className="pb-10">
          <p className="pb-2.5">Место прибытия</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Введите место прибытия..."
            className="bg-[#ffffff68] w-full h-10 border solid rounded-sm outline-none px-5 py-2.5 placeholder:text-white placeholder:text-xs"
          />
        </div>
        <div className="pb-10 flex gap-5">
          <div>
            <p className="pb-2.5">Дата начала</p>
            <input
              type="date"
              name=""
              id=""
              placeholder="Выберите дату начала..."
              className="bg-[#ffffff68] px-5 py-2.5 border solid rounded-sm outline-none cursor-pointer placeholder:text-xs"
            />
          </div>
          <div>
            <p className="pb-2.5">Дата конца</p>
            <input
              type="date"
              name=""
              id=""
              placeholder="Выберите дату окончания..."
              className="bg-[#ffffff68] px-5 py-2.5 border solid rounded-sm outline-none cursor-pointer placeholder:text-xs"
            />
          </div>
        </div>
        <div className="pb-10">
          <p className="pb-2.5">Цель поездки</p>
          <TravelPurpose />
        </div>
        <div>
          <p className="pb-2.5">Дополнительные примечания</p>
          <input
            type="text"
            name=""
            id=""
            className="bg-[#ffffff68] w-full h-24 border solid rounded-sm outline-none px-5 py-2.5 placeholder:text-white placeholder:text-xs"
            placeholder="Введите какие-либо дополнительные примечания..."
          />
        </div>
      </div>
    </div>
  );
};

export default TravelRequest;
