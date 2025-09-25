import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { VehicleProvider } from "./contexts/VehicleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VehicleProvider>
      <App />
    </VehicleProvider>
  </React.StrictMode>
);
