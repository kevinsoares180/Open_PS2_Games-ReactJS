import React, { createContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import data from "../../data.json";
import logo from "./logoPS2.svg";

export const inputContext = createContext();

const Navbar = ({ setProps, setPropsWithout }) => {
  const [isGamePage, setIsGamePage] = useState(false);
  const [inputText, setInputText] = useState("grand theft");

  const location = useLocation();
  function mySubmitFunction(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (location.pathname != "/") {
      setIsGamePage(true);
    } else {
      setIsGamePage(false);
    }
    console.log(location.pathname);
  }, [location.pathname]);

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
            <a class="nav-title">
              <img className="svg" src={logo} alt="" />
            </a>
          </Link>
          {isGamePage ? (
            <Link to="">
              {" "}
              <a class="btn mybutton nav-title">Voltar ao Menu</a>
            </Link>
          ) : (
            <form onSubmit={mySubmitFunction} class="form-inline my-2 my-lg-0 ">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Pesquisar"
                onChange={inputHandler}
                aria-label="Search"
              />
            </form>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
