import React from "react";

const TravelRequest = () => {
  return (
    <div className="bg-[#2A2C2F] px-12 py-6">
      <h1 className="pb-10 font-bold text-3xl ">Новая поездка</h1>
      <div className="pb-10">
        <p className="pb-2.5">Место прибытия</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Введите место прибытия..."
          className="bg-white w-[300px] h-10 border solid rounded-sm outline-none px-5 py-2.5 placeholder:text-[#2A2C2F]"
        />
      </div>
      <div className="pb-10 flex gap-5">
        <div>
          <p className="pb-2.5">Дата начала</p>
          <input type="date" name="" id="" placeholder="Выберите дату начала..." className="bg-white border solid rounded-sm outline-none"/>
        </div>
        <div>
          <p className="pb-2.5">Дата конца</p>
          <input type="date" name="" id="" placeholder="Выберите дату окончания..." className="bg-white border solid rounded-sm outline-none"/>
        </div>
      </div>
    </div>
  );
};

export default TravelRequest;
