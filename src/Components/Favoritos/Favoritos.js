import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heartblack from "../Games/heartblack.svg";
import heartred from "../Games/heartred.svg";
import data from "../../data.json";
import gameover from "./game-over.png";

const Favoritos = () => {
  const [hasFavorite, setHasFavorite] = useState(false);

  function handleFavorite(idGame) {
    if (localStorage.getItem("liked" + idGame)) {
      document.getElementById(idGame).src = heartblack;
      document.getElementById("card" + idGame).remove();
      localStorage.removeItem("liked" + idGame);
    } else {
      document.getElementById(idGame).src = heartred;
      localStorage.setItem("liked" + idGame, true);
    }
  }

  useEffect(() => {
    for (var i = 0; i < 10; i++) {
      if (localStorage.getItem("liked" + i)) {
        setHasFavorite(true);
        return;
      } else {
        setHasFavorite(false);
      }
    }
  }, []);
  return (
    <>
      <div className="container">
        <h2 className="game-title nav-title">Meus Jogos Favoritos</h2>
      </div>
      <div class="mygames container" id="tourpackages-carousel">
        <div class="row">
          {hasFavorite ? (
            ""
          ) : (
            <div className="gameover">
              <p className="game-info">
                Que pena :( você ainda não adicionou nenhum jogo ao seus
                favoritos
              </p>
              <img className="img-fluid" src={gameover} alt="gameover" />
              <Link to="/">
                <a class="btn mybutton" href={() => false}>
                  Encontrar Jogos
                </a>
              </Link>
            </div>
          )}
          {data.Games.map((Gamx, index) => {
            return (
              localStorage.getItem("liked" + Gamx.ID) && (
                <div
                  class="card-game col-xs-5 col-sm-6 col-md-4"
                  id={"card" + Gamx.ID}
                >
                  <div class="container caption">
                    <div className="image-container">
                      <Link to={`/games/${Gamx.ID}/${Gamx.Name}`}>
                        <img
                          src={Gamx.Icon}
                          alt="..."
                          className="mymainthumb img-fluid"
                        ></img>
                      </Link>
                    </div>
                    <p className="plataform">PS2</p>
                    <p className="favorite">
                      <img
                        className=" heart"
                        id={Gamx.ID}
                        src={
                          localStorage.getItem("liked" + Gamx.ID)
                            ? heartred
                            : heartblack
                        }
                        alt="heart"
                        onClick={() => handleFavorite(Gamx.ID)}
                      ></img>
                    </p>

                    <h4 className="game-title">{Gamx.Name}</h4>
                    {/*(<p className="game-tags">{Gamx.Genre[0]}</p>*/}
                    {/* <p className="game-tags">{Gamx.Genre[1]}</p>*/}
                  </div>
                  <div className="button-container">
                    <Link to={`/games/${Gamx.ID}/${Gamx.Name}`}>
                      <button className="btn mybutton">
                        Ver Página do Jogo
                      </button>
                    </Link>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Favoritos;
