import React, { useContext, useEffect } from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
import { inputContext } from "../NavBar/NavBar";

const Games = () => {
  const input = useContext(inputContext);

  return (
    <>
      <div class="mygames container" id="tourpackages-carousel">
        <div class="row">
          {input.inputText.map((Gamx) => {
            return (
              <div class="card-game col-xs-5 col-sm-6 col-md-4">
                <div class="container caption">
                  <div className="image-container">
                    <Link to={`/games/${Gamx.ID}/${Gamx.Name}`}>
                      <img
                        src={Gamx.Icon}
                        alt="..."
                        className="mymainthumb img-thumbnail img-fluid"
                      ></img>
                    </Link>
                  </div>
                  <p className="plataform">PS2</p>
                  <h4 className="game-title">{Gamx.Name}</h4>
                  {/*(<p className="game-tags">{Gamx.Genre[0]}</p>*/}
                  {/* <p className="game-tags">{Gamx.Genre[1]}</p>*/}
                </div>
                <div className="button-container">
                  <Link to={`/games/${Gamx.ID}/${Gamx.Name}`}>
                    <button className="btn mybutton">Ver Página do Jogo</button>
                  </Link>
                </div>
              </div>
            );
          })}
          {input.inputTextWithout.map((Gamx) => {
            return (
              <div class="card-game col-xs-5 col-sm-6 col-md-4">
                <div class="container caption">
                  <div className="image-container">
                    <Link to={`/games/${Gamx.ID}/${Gamx.Name}`}>
                      <img
                        src={Gamx.Icon}
                        alt="..."
                        className="mymainthumb img-thumbnail img-fluid"
                      ></img>
                    </Link>
                  </div>
                  <p className="plataform">PS2</p>
                  <h4 className="game-title">{Gamx.Name}</h4>
                  {/*(<p className="game-tags">{Gamx.Genre[0]}</p>*/}
                  {/* <p className="game-tags">{Gamx.Genre[1]}</p>*/}
                </div>
                <div className="button-container">
                  <Link to={`/games/${Gamx.ID}/${Gamx.Name}`}>
                    <button className="btn mybutton">Ver Página do Jogo</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Games;
