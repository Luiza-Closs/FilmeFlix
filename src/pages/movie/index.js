import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [trailerKey, setTrailerKey] = useState("");
  const [movie, setMovie] = useState([]);

  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const res = data.results;
        let filme = res.find((key) => {
          // eslint-disable-next-line
          return key.id == id;
        });
        setMovie(filme);
      }); // eslint-disable-next-line
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const videos = data.results;
        const trailer = videos.find((video) => video.type === "Trailer");
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      });
  }, [id, KEY]);

  function criarIcones(valor) {
    valor = parseInt(valor, 10);
    if (valor < 0 || valor > 10) {
      console.log("O valor deve estar entre 0 e 10");
      return;
    }

    let estrelas = (valor * 5) / 10;
    let resultado = "";

    for (let i = 0; i < estrelas; i++) {
      if (i < 5) {
        resultado += "★"; // Use o caractere que representa o ícone aqui
      }
    }

    return resultado;
  }

  return (
    <div>
      <div className="container">
        <div className="container mt-4">
          <div className="card-img-top" width="100%">
            <img
              width="100%"
              className="img_movie"
              src={`${imagePath}${movie.backdrop_path}`}
              alt="{movie.title}"
            />
          </div>
          <div className="card-body">
            <h3 className=" card-text">{movie.title}</h3>
            <p className="card-text">{movie.overview}</p>
            <p className="card-text">
              {criarIcones(movie.vote_average)} {movie.vote_average}
            </p>
            <div className="d-flex justify-content-between align-items-center">
            
            </div>
          </div>
        </div>
      </div>
    </div>
    /*<div>
            <img
                className="img_movie"
                src={`${imagePath}${movie.poster_path}`}
                alt="{movie.title}"
            />
            <div className="container">
                <h1>{movie.title}</h1>
                <h3>Data de lançamento: {movie.release_date}</h3>
                <div className="descricao">
                    <h4>Descrição: </h4>
                    <p className="movie-desc">{movie.overview}</p>
                </div>
                <Link to="/">
                    <button className="link_button">Voltar</button>
                </Link>
            </div>
        </div>*/
  );
};

export default Movie;
