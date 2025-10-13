import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between max-[768px]:flex-col">
      <div className="flex gap-5 max-[768px]:flex-col max-[768px]:text-2xl max-[768px]:mb-12">
        <a href="https://yandex.ru/maps">Карты</a>
        <a href="https://yandex.ru/pogoda">Погода</a>
        <a href="https://rasp.yandex.ru">Расписание</a>
        <a href="https://calendar.yandex.ru">Каледарь</a>
        <a href="https://travel.yandex.ru">Путешествия</a>
      </div>
      <div className="text-[14px]">© 2020. Впишите своё имя</div>
    </div>
  );
};

export default Footer;
