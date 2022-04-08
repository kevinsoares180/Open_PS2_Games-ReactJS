import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";

export const inputContext = createContext();

const Navbar = ({ setProps, setPropsWithout }) => {
  const [inputText, setInputText] = useState("grand theft");

  function mySubmitFunction(e) {
    e.preventDefault();
  }

  function inputHandler(e) {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);

    const filteredDataWithout = data.Games.filter((el) => {
      if (inputText === "") {
        return data.Games;
      } else {
        return !el.Name.toLowerCase().includes(inputText);
      }
    });

    const filteredData = data.Games.filter((el) => {
      if (inputText === "") {
        return data.Games;
      } else {
        return el.Name.toLowerCase().includes(inputText);
      }
    });

    return setProps(filteredData), setPropsWithout(filteredDataWithout);
  }

  return (
    <>
      <nav class="mynavbar navbar-expand-lg navbar-light">
        <div class=" navbar-collapse" id="navbarTogglerDemo01">
          <Link to="">
            {" "}
            <a class="nav-title">STATION GAMES</a>
          </Link>
          <form onSubmit={mySubmitFunction} class="form-inline my-2 my-lg-0 ">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Pesquisar"
              onChange={inputHandler}
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
