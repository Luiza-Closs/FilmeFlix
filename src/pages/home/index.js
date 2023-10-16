import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movies, setMovies] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    const Pages = 15;
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [KEY]);



    return (
        <div className="container">
            <div>
                <div className="row mt-5">
                    {movies.map((filme) => (
                        <div key={filme.id} className="col-md-2 md-3">
                            <Link to={`${filme.id}`}> 
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                    alt={filme.title}
                                    className="img-fluid poster"
                                />
                                <span>{filme.title}</span>
                            </Link>   
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Home;
