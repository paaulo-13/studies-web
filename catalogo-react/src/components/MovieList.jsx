import { use, useEffect, useState } from "react"



function MovieList({ busca }) {

    const [resultadosBusca, setResultadosBusca] = useState([]);
    const [populares, setPopulares] = useState([]);
    const [novidades, setNovidades] = useState([]);
    const [favoritos, setFavoritos] = useState(() => {
    const salvo = localStorage.getItem('favoritos');
    return salvo ? JSON.parse(salvo) : [];
    });

    useEffect(() => {
        if (busca.trim() !=='') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=b1bf722e448db2af2236039be0782e6a&query=${busca}&language=pt-BR`)
                .then(res => res.json())
                .then(data => setResultadosBusca(data.results));
            } else {
                setResultadosBusca([]);
            }
        }, [busca]);

    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b1bf722e448db2af2236039be0782e6a&language=pt-BR')

        .then(Response => Response.json())

        .then(data => {
            setPopulares(data.results);
        });

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b1bf722e448db2af2236039be0782e6a&language=pt-BR')

        .then(Response => Response.json())

        .then(data => {
            setNovidades(data.results)
        });
    }, []);

    useEffect(() =>{
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }, [favoritos])

 

function favoritarFilme(filmeClicado) {
    const jaFavorito = favoritos.some(filme => filme.id === filmeClicado.id);

    if (jaFavorito){
        const novListaFav = favoritos.filter(filme => filme.id !== filmeClicado.id);
        setFavoritos(novListaFav);
    } else {
        setFavoritos([...favoritos, filmeClicado])
        }
    }
    return(
        <main>
        <section id="MovieList">

        {resultadosBusca.length > 0 && (
    <div className="container-list">
        <h2>Resultados da Pesquisa</h2>
        <div className="list-nov">
            {resultadosBusca.map(filme => (
                <article key={filme.id}>
                    <h3>{filme.title}</h3>
                    <button onClick={() => favoritarFilme(filme)}>
                        {favoritos.some(f => f.id === filme.id) ? '❤️' : '🤍'}
                    </button>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} 
                        alt={filme.title} 
                        className="poster-image" 
                    />
                    <span>{filme.vote_average}</span>
                </article>
            ))}
        </div>
    </div>
)}

            <div className="container-list">
            <h2>Novidades</h2>
                <div className="list-nov">
                    {novidades.map(filme => (
                        <article key={filme.id}>
                            <h3>{filme.title}</h3>
                            <button onClick={() => favoritarFilme(filme)}>{favoritos.some(f => f.id === filme.id) ? '❤️' : '🤍'}</button>
                            <img 
                            src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} 
                            alt={filme.title}
                            className="poster-image" 
                            />
                            <span>{filme.vote_average}</span>
                        </article>
                    ))}
                </div>
            </div>

            <div className="container-list">
            <h2>Populares</h2>
                <div className="list-pop">
                   {populares.map(filme => (
                        <article key={filme.id}>
                            <h3>{filme.title}</h3>
                            <button onClick={() => favoritarFilme(filme)}>{favoritos.some(f => f.id === filme.id) ? '❤️' : '🤍'}</button>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                alt={filme.title}
                                className="poster-image"
                            />
                            <span>{filme.vote_average}</span>
                        </article>
                   ))} 
                </div>
            </div>

            <div className="container-list">
            <h2>Favoritos</h2>
                <div className="list-fav">
                    {favoritos.length === 0 ? (
                    <p>Nenhum filme favoritado ainda.</p>
                    ) : (
                    favoritos.map(filme => (
                <article key={filme.id}>
                    <h3>{filme.title}</h3>
                    <img 
                    src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} 
                    alt={filme.title} 
                    className="poster-image"
                    />
                </article>
        ))
    )}
</div>
            </div>

        </section>
        </main>
    )
}

export default MovieList