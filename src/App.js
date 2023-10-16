import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";
import Genero from "./pages/categoria"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:id" exact element={<Movie />} />
                <Route path="/genero/:idGen" exact element={<Genero />} />
                <Route path="/genero/:idGen/:id" exact element={<Movie />} />
            </Routes>
        </div>
    );
};

export default App;
