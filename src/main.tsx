import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@thefarmersfront/kpds-css/dist/style.css";
import App from "./App.tsx";
import { ThemeProvider } from "@thefarmersfront/kpds-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
