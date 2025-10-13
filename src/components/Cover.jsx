import React from "react";

const Cover = () => {
  return (
    <div className="grid grid-cols-1 xl:px-12 bg-[#2A2C2F]">
      <img
        className="col-start-1 row-start-1 z-0 opacity-70"
        src="src\assets\cover__backgroundPhoto.jpg"
        alt="cover__backgroundPhoto"
      />

      <div className="col-start-1 row-start-1 z-1 bg-transparent hover:bg-[#2a2c2f80] transition duration-700">
        <a href="https://stampsy.com/na-elektrichkakh-do-baikala">
          <div className="flex flex-col justify-center items-center text-center h-full">
            <h1 className="font-black text-7xl  max-w-[560px] mb-8 max-[600px]:text-[32px] max-[600px]:max-w-[250px]">
              До Байкала «на собаках»
            </h1>
            <p className="text-lg max-w-[360px] max-[600px]:text-[14px]">
              По мотивам учебной темы о Транссибе — путешествие от столицы до
              Байкала на электричках.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Cover;
