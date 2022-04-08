import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import GamePage from "../GamePage/GamePage";

const ExactPath = () => {
  const { idroute } = useParams();
  console.log("myid " + idroute);

  return (
    <>
      {idroute > data.Games.length || isNaN(idroute) ? (
        ""
      ) : (
        <GamePage id={idroute} />
      )}
    </>
  );
};
export default ExactPath;
