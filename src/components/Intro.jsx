import React from "react";

const Intro = () => {
  return (
    <div className=" xl:pl-[100px]">
      <h1 className="font-black text-[32px] max-[490px]:max-w-52 leading-10 md:text-[54px] mb-10">
        Чего мы там не видели?
      </h1>
      <p className="mb-[33px] max-w-[690px]">
        По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36%
        планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не
        видели? На самом деле, Россия — это целая вселенная с ласковым морем
        юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть
        все эти красоты можно без миллионов на счету, загранпаспорта и
        многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая
        мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и
        проехала 20 тысяч километров по родной стране. Мы выбрали и описали
        некоторые интересные места, достойные вашего отпуска.
      </p>
      <div>
        <p className="text-xs">
          <span className="font-semibold">Часовых поясов</span> 11
        </p>
        <p className="text-xs">
          <span className="font-semibold">
            Объектов природного наследия ЮНЕСКО
          </span>{" "}
          12
        </p>
        <p className="text-xs">
          <span className="font-semibold">
            Объектов культурного наследия ЮНЕСКО
          </span>{" "}
          16
        </p>
        <p className="text-xs">
          <span className="font-semibold">Природных заповедников</span> 105
        </p>
        <p className="text-xs">
          <span className="font-semibold">Аэропортов</span> 241
        </p>
      </div>
    </div>
  );
};

export default Intro;
