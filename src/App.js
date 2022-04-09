import React, { useEffect, useState } from "react";
import Games from "./Components/Games/Games";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExactPath from "./Components/ExactPath/ExactPath";
import Navbar from "./Components/NavBar/NavBar";
import { inputContext } from "./Components/NavBar/NavBar";
import data from "./data.json";
import Categorias from "./Components/Categorias/Categorias";
import Favoritos from "./Components/Favoritos/Favoritos";
import GamesCategory from "./Components/GamesCategory.js/GamesCategory";

function App() {
  const [inputText, setInputText] = useState(data.Games);
  const [inputTextWithout, setInputTextWithout] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar setProps={setInputText} setPropsWithout={setInputTextWithout} />
        <Routes>
          <Route
            path="/"
            element={
              <inputContext.Provider value={{ inputText, inputTextWithout }}>
                <Games />
              </inputContext.Provider>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/categorias" element={<Categorias />}></Route>
        </Routes>
        <Routes>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
        <Routes>
          <Route
            path={`/games/:idroute/:gamename`}
            element={<ExactPath />}
          ></Route>
        </Routes>
        <Routes>
          <Route
            path={`/categoria/:categoryURL`}
            element={<GamesCategory />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
