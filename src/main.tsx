import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/styles/base/normalize.scss";
import "./shared/styles/base/global.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
