import React from "react";
import Header from "./components/Header";
import Lead from "./components/Lead";
import Intro from "./components/Intro";
import PhotoGrid from "./components/PhotoGrid";
import Places from "./components/Places";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import LeadImg from "./assets/leadImg.png";

import './i18n'


const App = () => {
  return (
    <div className="bg-[#2A2C2F]">
      <div className="pt-1.75 px-12 flex flex-col gap-[92px] max-[768px]:gap-[88px]  max-[320px]:gap-[64px]">
        <Header />
        <Lead />
      </div>
      <div className="flex justify-center lg:px-10 xl:px-36">
        <img className="w-full" src={LeadImg} alt="image" />
      </div>
      <div className="pt-1.75 px-12 flex flex-col gap-[92px] max-[768px]:gap-[88px]  max-[320px]:gap-[64px]">
        <p className="uppercase text-[10px] tracking-[1.5px] lg:px-9 xl:px-32">
          ваша полка — верхняя
        </p>
        <Intro />
        <PhotoGrid />
        <Places />
      </div>
      <div>
        <Cover />
      </div>
      <div className="pt-1.75 px-12 pb-6 bg-[#2A2C2F] flex flex-col ">
        <Footer />
      </div>
    </div>
  );
};

export default App;
