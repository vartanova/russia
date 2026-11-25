import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useTranslation } from "react-i18next";
import logo from "./../assets/__logo.svg";
import { useNavigate } from "react-router-dom";
import SwitchLocale from "./SwitchLocale";


const Header = () => {
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setSignedIn(Boolean(session)));
    return () => subscription.unsubscribe();
  }, []);

  const { t } = useTranslation("header");

  return (
    <div className="flex justify-between items-center">
      <nav className="flex gap-5 items-center">
        <a href="#">
          <img className="max-[400px]:max-w-36" src={logo} alt="logo" />
        </a>

        <button
          onClick={() => navigate("/travel")}
          className="cursor-pointer pt-3.5 focus:underline underline-offset-3 decoration-1 under text-white text-2xl max-[607px]:text-lg max-[400px]:hidden"
        >
          {t("nav.travel")}
        </button>

        <button
          onClick={() => navigate("/request")}
          className="cursor-pointer pt-3.5 focus:underline underline-offset-3 decoration-1 under text-white text-2xl max-[607px]:text-lg max-[400px]:hidden"
        >
          {t("nav.travelRequest")}
        </button>
      </nav>

      <div className="flex items-center gap-3">
        <button type="button" onClick={async () => {
          if (signedIn) {
            const { error } = await supabase.auth.signOut();
            if (error) return;
          } else {
            navigate("/request");
          }
        }}
          className={`rounded-full border cursor-pointer border-white/70 px-4 py-2 text-sm font-medium text-white transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
           ${signedIn && "border-black text-black"}`
          }>
          {signedIn ? "Выйти" : "Войти"}
        </button>
        <SwitchLocale />
      </div>
    </div>
  );
};

export default Header;
