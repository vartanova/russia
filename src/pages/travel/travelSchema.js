import * as yup from "yup";

const regDate = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.[0-9]{2}$/;

export const schema = (tError) =>
  yup.object().shape({
    destination: yup.string().trim().required(tError("errorRequired")),
    dateStart: yup
      .string()
      .required(tError("errorRequired"))
      .matches(regDate, tError("errorDate")),
    dateEnd: yup
      .string()
      .required(tError("errorRequired"))
      .matches(regDate, tError("errorDate"))
      // .min(yup.ref("dateStart"), tError("errorMatch")),
      .test("is-not-start", tError("errorMatch"), function (value) {
        if (!value) return;
        const start = dateStart.split(".").reverse().join("");
        const end = dateEnd.split(".").reverse().join("");
        return start <= end;
      }),
  });
