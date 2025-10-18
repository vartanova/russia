import * as yup from "yup";

const regDate: RegExp = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.[0-9]{2}$/;

export const schema = yup.object().shape({
  destination: yup.string().trim().required("Обязательное поле ввода"),
  dateStart: yup
    .string()
    .required("Обязательное поле ввода")
    .matches(regDate, "Неверный формат даты ДД.ММ.ГГ"),
  dateEnd: yup
    .string()
    .required("Обязательное поле ввода")
    .matches(regDate, "Неверный формат даты ДД.ММ.ГГ"),
});
