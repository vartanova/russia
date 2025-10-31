import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n.js";
import { ErrorBoundary } from "react-error-boundary";
import error_bg from "./assets/error_bg.png";

const fallbackRender = ({ error }) => {
  console.log("error", error);

  return (
    <div className="page__error h-full">
      <div className="z-1 relative bg-linear-to-tl from-[#2a2c2f] to-[#aaccffc5] rounded-4xl border p-10 flex flex-col items-center gap-5 font-extralight text-center drop-shadow-2xl">
        <p className="text-xl max-[960px]:text-md max-[740px]:text-xs">
          Упс...
        </p>
        <h1 className=" text-8xl max-[960px]:text-6xl max-[740px]:text-4xl">
          Что-то пошло <br /> не так:
        </h1>
        <pre className="text-xl max-[960px]:text-md max-[740px]:text-xs">
          {error.message}
        </pre>
      </div>
      <img src={error_bg} className="absolute bottom-0 right-0 z-0 blur-sm" />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
