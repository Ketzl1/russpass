import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import "./styles/style.favorite.css";
import "./styles/styleigor.css";
import "./styles/styleOneTour.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);

// console.log(process.env.REACT_APP_API_URL)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
