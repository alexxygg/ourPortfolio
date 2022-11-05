import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./NavBar";
import AfterNav from "./AfterNav";
import FillerOnly from "./FillerOnly";
import BfterNav from "./BfterNav";
import Footer from "./Footer";
import CFterNavBar from "./CFterNavBar";
import NIceRow from "./NIceRow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <NavBar />

    <AfterNav />
    <NIceRow />

    <BfterNav />
    <NIceRow />

    <CFterNavBar />
    <NIceRow />
    <FillerOnly />
    <NIceRow />

    <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
