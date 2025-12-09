import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SiteDataProvider } from "./context/SiteDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <SiteDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SiteDataProvider>
    </ThemeProvider>
  </React.StrictMode>
);
