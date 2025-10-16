import React from "react";

const TravelPurpose = () => {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <select className=" w-full px-5 py-2.5 bg-[#ffffff68] text-sm border solid rounded-sm outline-none appearance-none cursor-pointer">
          <option className="travel__purpose_item text-xs">Еду в командировку</option>
          <option className="travel__purpose_item text-xs">Хочу навестить семью</option>
          <option className="travel__purpose_item text-xs">Нужно решить рабочие вопросы</option>
          <option className="travel__purpose_item text-xs">Планирую отдыхать на море</option>
        </select>
        <svg
          className="w-5 h-5 absolute top-[25%] right-1.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8 15 4 4 4-4m0-6-4-4-4 4"
          />
        </svg>
      </div>
    </div>
  );
};

export default TravelPurpose;
