import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/NavBar/NavBar.css";
import "./Components/Games/Games.css";
import "./Components/GamePage/GamePage.css";
import "./Components/Favoritos/Favoritos.css";
import "./Components/Footer/Footer.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
