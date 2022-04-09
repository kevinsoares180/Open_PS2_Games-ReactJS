import React from "react";
import { Link } from "react-router-dom";
import dataCategory from "../../data-category.json";

const Categorias = () => {
  return (
    <>
      <div class="mygames container" id="tourpackages-carousel">
        <div class="row">
          {dataCategory.Category.map((Gamx) => {
            return (
              <div class="card-game col-xs-5 col-sm-6 col-md-4">
                <div class="container caption">
                  <div className="image-container">
                    <Link to={`/categoria/${Gamx.Name}`}>
                      <img
                        src={Gamx.Icon}
                        alt="..."
                        className="mymainthumb img-fluid"
                      ></img>
                    </Link>
                  </div>
                  <h4 className="game-title">{Gamx.Name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Categorias;
