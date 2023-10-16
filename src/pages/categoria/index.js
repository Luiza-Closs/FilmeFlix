import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Genero = () => {
    const [generos, setGeneros] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    const { idGen } = useParams();
    const Pages = 15;

    useEffect(() =>{
        const fetchGenero = async () =>{
            try{
                const resultados = []

                for(let page = 1; page <= Pages; page++){
                    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-br&with_genres=${idGen}&page=${page}`)
                    const data = await response.json()
                    resultados.push(...data.results);
                }

                setGeneros(resultados)
            } catch(erro) {
                console.error(erro);
            }
        }

        fetchGenero()
    }, [idGen, KEY, Pages])

    return (
        <div className="container">
            <div>
                <div className="row mt-5">
                    {generos.map((filme) => (
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
    )
}

export default Genero;