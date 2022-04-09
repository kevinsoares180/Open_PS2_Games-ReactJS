import React, { useState } from "react";
import Games from "./Components/Games/Games";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExactPath from "./Components/ExactPath/ExactPath";
import Navbar from "./Components/NavBar/NavBar";
import { inputContext } from "./Components/NavBar/NavBar";
import data from "./data.json";
import Categorias from "./Components/Categorias/Categorias";
import Favoritos from "./Components/Favoritos/Favoritos";
import GamesCategory from "./Components/GamesCategory.js/GamesCategory";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error";

function App() {
  const [inputText, setInputText] = useState(data.Games);
  const [inputTextWithout, setInputTextWithout] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar setProps={setInputText} setPropsWithout={setInputTextWithout} />
        <Routes>
          <Route path="*" exact={true} element={<Error />} />

          <Route
            path="/"
            element={
              <inputContext.Provider value={{ inputText, inputTextWithout }}>
                <Games />
              </inputContext.Provider>
            }
          ></Route>

          <Route path="/categorias" element={<Categorias />}></Route>

          <Route path="/favoritos" element={<Favoritos />}></Route>

          <Route
            path={`/games/:idroute/:gamename`}
            element={<ExactPath />}
          ></Route>

          <Route
            path={`/categoria/:categoryURL`}
            element={<GamesCategory />}
          ></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
