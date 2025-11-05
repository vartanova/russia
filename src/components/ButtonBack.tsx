import React from "react";
import { useNavigate } from "react-router-dom";
import type { SwitchLocaleProps } from "./SwitchLocale";


const BtnBack = ({isPending}: SwitchLocaleProps) => {
  const navigate = useNavigate();

  return (
    <button className="w-full cursor-pointer flex justify-center" onClick={() => navigate(-1)} type="button" disabled={isPending}>
      <svg
        className="w-[20px] py-1.5 cursor-pointer outline-none focus:underline underline-offset-3 decoration-1 under"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m15 19-7-7 7-7"
        />
      </svg>
    </button>
  );
};

export default BtnBack;
