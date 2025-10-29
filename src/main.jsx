import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n.js";
import { ErrorBoundary } from "react-error-boundary";

const fallbackRender = ({ error, resetErrorBoundary }) => {
  console.log("error", error)
  return (
    <div className="font-bold p-12">
      <h1 className="travel__purpose_item text-3xl mb-3">Что-то пошло не так:</h1>
      <pre className="travel__purpose_item">{error.message}</pre>
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
