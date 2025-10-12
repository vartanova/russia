import React from "react";

const Lead = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-[320px]:gap-4 mb-16">
      <h1 className="font-black text-center max-[320px]:leading-11 max-[320px]:text-[40px] max-[320px]:max-w-[288px] min-[320px]:text-5xl min-[320px]:max-w-[360px] md:text-8xl md:max-w-[720px]">
        Путешествия по России
      </h1>
      <p className="text-3xl text-center max-[320px]:text-base">
        Настоящая страна не в выпусках
        <br />
        новостей, а здесь.
      </p>
    </div>
  );
};

export default Lead;
