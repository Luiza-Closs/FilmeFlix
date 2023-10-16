import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import App from "./App";
import "./global.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">

        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href='/' className="nav-link px-2 text-secondary">Inicio</a></li>
          <li><a href="/" className="nav-link px-2 text-white">Filmes</a></li>
          <li>
            <a className="nav-link px-2 text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">Gêneros</a>
            <ul className="dropdown-menu bg-black">
              <li> <a className="text-white" href="/genero/12">Aventura</a></li>
              <li> <a className="text-white" href="/genero/35">Comédia</a></li>
              <li> <a className="text-white" href="/genero/80">Crime</a></li>
              <li> <a className="text-white" href="/genero/99">Documentário</a></li>
              <li> <a className="text-white" href="/genero/18">Drama</a></li>
              <li> <a className="text-white" href="/genero/10751">Família</a></li>
              <li> <a className="text-white" href="/genero/14">Fantasia</a></li>
              <li> <a className="text-white" href="/genero/36">História</a></li>
              <li> <a className="text-white" href="/genero/27">Terror</a></li>
              <li> <a className="text-white" href="/genero/10402">Música</a></li>
              <li> <a className="text-white" href="/genero/9648">Mistério</a></li>
              <li> <a className="text-white" href="/genero/10749">Romance</a></li>
              <li> <a className="text-white" href="/genero/878">Ficção científica</a></li>
              <li> <a className="text-white" href="/genero/10770">Cinema TV</a></li>
              <li> <a className="text-white" href="/genero/53">Thriller</a></li>
              <li> <a className="text-white" href="/genero/10752">Guerra</a></li>
              <li> <a className="text-white" href="/genero/37">Faroeste</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </header>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
