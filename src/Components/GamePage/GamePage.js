import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "../../data.json";

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="myscreenshots">
          <div class="row">
            <div class="col-xs-18 col-sm-12 col-md-8">
              <div className="container">
                <Carousel>
                  {data.Games[this.props.id].Screenshots.map((Screens) => {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={Screens}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
                <div class="card-body">
                  <p class="card-text">{data.Games[this.props.id].Sobre}</p>
                  <div className="button-container">
                    <a
                      target="_blank"
                      href={data.Games[this.props.id].DownloadURL}
                      className="btn mybutton"
                    >
                      Baixar Esse Jogo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="container col-xs-18 col-sm-10 col-md-3">
              <div className="image-container">
                <img
                  src={data.Games[this.props.id].Icon}
                  alt="..."
                  className=" img-fluid"
                ></img>
              </div>
              <div class="container">
                <h3 className="game-title">{data.Games[this.props.id].Name}</h3>

                <p className="game-info">{data.Games[this.props.id].Date}</p>
                <p className="game-title">
                  {data.Games[this.props.id].Developer}
                </p>

                <div className="container">
                  <p className="game-info">Gêneros</p>
                  <div className="game-gen">
                    <p className="game-info">
                      {data.Games[this.props.id].Genre[0]}
                    </p>
                    <p className="game-info">
                      {data.Games[this.props.id].Genre[1]}
                    </p>
                  </div>
                </div>
                <div className="container">
                  <p className="game-info">Caracteristicas</p>
                  <div className="game-gen">
                    <p className="game-info">
                      {data.Games[this.props.id].Player[0]}
                    </p>
                    <p className="game-info">
                      {data.Games[this.props.id].Player[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="video-container">
          <iframe
            src={data.Games[this.props.id].Youtube + "?autoplay=1&mute=1"}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}
