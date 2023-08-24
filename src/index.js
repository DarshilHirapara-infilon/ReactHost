import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "../src/components/header";
import reportWebVitals from "./reportWebVitals";
import FirstPage from "../src/pages/first-page";
import SecondPage from "../src/pages/second-page";
import ThridPage from "../src/pages/thrid-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <FirstPage />
    <SecondPage />
    <ThridPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
