import React, { createContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import data from "../../data.json";
import logo from "./logoPS2.svg";

export const inputContext = createContext();

const Navbar = ({ setProps, setPropsWithout }) => {
  const history = useNavigate();
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
            <a class="nav-title">
              <img className="svg" src={logo} alt="" />
            </a>
          </Link>
          {isGamePage ? (
            <a class="btn mybutton nav-title" onClick={() => history(-1)}>
              Voltar
            </a>
          ) : (
            <form onSubmit={mySubmitFunction} class="form-inline my-2 my-lg-0 ">
              <input
                class="form-control mr-sm-2"
                type="text"
                list="tags"
                placeholder="Pesquisar Nome do Jogo"
                onChange={inputHandler}
                aria-label="Search"
              />
            </form>
          )}
        </div>
        {!isGamePage && (
          <div className="btn-nav">
            <Link to="/categorias">
              <a class="btn nav-button nav-title">Ver Categorias</a>
            </Link>
            <Link to="/favoritos">
              <a class="btn nav-button nav-title">Meus Favoritos</a>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
