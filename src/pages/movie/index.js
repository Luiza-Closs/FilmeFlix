import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/original";
  
  const [movie, setMovie] = useState([]);

  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
      .then((response) => 
        response.json()
      )
      .then((data) => {
        setMovie(data); // Ajuste aqui para usar diretamente o objeto retornado pela API
      })
      .catch((error) => {
        //console.error("Erro ao buscar detalhes do filme:", error);
      });
  }, [id, KEY]);

  function criarIcones(valor) {
    valor = parseInt(valor, 10);
    if (valor < 0 || valor > 10) {
      console.log("O valor deve estar entre 0 e 10");
      return;
    }

    let estrelasPreenchidas = Math.floor((valor * 5) / 10);
    let estrelasVazias = 5 - estrelasPreenchidas;

    let resultado = "";

    // Adiciona estrelas preenchidas (vermelhas)
    for (let i = 0; i < estrelasPreenchidas; i++) {
      resultado += "★";
    }

    // Adiciona estrelas vazias (azuis)
    for (let i = 0; i < estrelasVazias; i++) {
      resultado += "☆";
    }
    return resultado;
  }

  return (
    <div style={{ backgroundImage: `url(${imagePath}${movie.backdrop_path})`}} className="coisotodo">
      <p>.</p>
      <div className="maincard">
        <div className="Banner">
          <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}/>
        </div>
        <div className="cardizin">
          <div className="parte1">
            <div className="vazioInfinito"></div>
            <div className="textinhoUm">
              <h4> {criarIcones(movie.vote_average)}</h4>
              <p className="small"> {movie.vote_average} </p>
            </div>
          </div>
          <div className="textin">
            <h1> <strong> {movie.title} </strong></h1>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Movie;
