import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import { Carousel } from "bootstrap";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/original";
    const [movies, setMovies] = useState([])
    const [popular, setPopular] = useState([])
    const [news, setNew] = useState([])
    const [top, setTops] = useState([])
    const KEY = process.env.REACT_APP_KEY;
    
    useEffect(() =>{
        async function carregarLista(){
            fetch(`https://api.themoviedb.org/3/list/8271861?api_key=${KEY}&language=pt-BR`)
                .then(response => response.json())
                .then((data) => {
                    setMovies(data.items)
                    loadPop();
                    loadNew();
                    loadTop();
                })
        }
        async function loadPop(){
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setPopular(data.results);
            });
        }
        async function loadNew(){
            fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setNew(data.results);
            });
        }
        async function loadTop() {
            fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=pt-BR`)
                .then((response) => response.json())
                .then((data) => {
                    setTops(data.results);
                });
        }

        carregarLista();
    }, [ KEY ])

    return (
        <div className="container">
            <div className="row">
                {movies.map((filme) => (
                    <div key={filme.id} className="col-md-3 md-2 p-1">
                        <Link to={`${filme.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                alt={filme.title}
                                className="img-fluid poster"
                            />
                        </Link>
                    </div>
                ))}
            </div>
            <h1>Filmes Populares</h1>
            <div className="row">
                {popular.map((filme) => (
                    <div key={filme.id} className="col-md-3 md-2 p-1">
                        <Link to={`${filme.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                alt={filme.title}
                                className="img-fluid poster"
                            />
                        </Link>
                    </div>
                ))}
            </div>
            <h1>Acabaram de Chegar</h1>
            <div className="row">
                {news.map((filme) => (
                    <div key={filme.id} className="col-md-3 md-2 p-1">
                        <Link to={`${filme.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                alt={filme.title}
                                className="img-fluid poster"
                            />
                        </Link>
                    </div>
                ))}
            </div>
            <h1>Filmes Inesqueciveis</h1>
            <div className="row">
                {top.map((filme) => (
                    <div key={filme.id} className="col-md-3 md-2 p-1">
                        <Link to={`${filme.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                alt={filme.title}
                                className="img-fluid poster"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Home;
