import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart as faHeartSolid,
    faStar as faStarSolid,
    faStarHalfStroke,
    faCircleChevronLeft,
    faCircleChevronRight
} from "@fortawesome/free-solid-svg-icons";
import {
    faHeart as faHeartRegular,
    faStar as faStarRegular
} from "@fortawesome/free-regular-svg-icons";

function Carrossel({ titulo, icone, endpoint, favoritos, favoritarFilme, onSelecionarFilme }) {
    const carrosselRef = useRef(null);
    const [filmes, setFilmes] = useState([]);

    // Cada Carrossel busca seus próprios filmes com base no endpoint recebido
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=pt-BR`)
            .then(res => res.json())
            .then(data => setFilmes(data.results || []));
    }, [endpoint]);

    // Função que calcula e gera as 5 estrelas baseada na nota (0 a 10)
    const renderizarEstrelas = (nota10) => {
        const nota5 = nota10 / 2;
        const estrelas = [];
        for (let i = 1; i <= 5; i++) {
            if (nota5 >= i) {
                estrelas.push(<FontAwesomeIcon key={i} icon={faStarSolid} className="star-icon star-full" />);
            } else if (nota5 >= i - 0.5) {
                estrelas.push(<FontAwesomeIcon key={i} icon={faStarHalfStroke} className="star-icon star-half" />);
            } else {
                estrelas.push(<FontAwesomeIcon key={i} icon={faStarRegular} className="star-icon star-empty" />);
            }
        }
        return estrelas;
    };

    // Rolar a esteira para a esquerda
    const rolarParaEsquerda = () => {
        if (carrosselRef.current) {
            carrosselRef.current.scrollBy({ left: -260, behavior: "smooth" });
        }
    };

    // Rolar a esteira para a direita
    const rolarParaDireita = () => {
        if (carrosselRef.current) {
            carrosselRef.current.scrollBy({ left: 260, behavior: "smooth" });
        }
    };

    if (!filmes || filmes.length === 0) return null;

    return (
        <div className="container-list">
            <h2 className="title-pill">
                <FontAwesomeIcon icon={icone} className="icons-sec" />
                <span>{titulo}</span>
            </h2>

            <div className="carrossel-wrapper">
                {/* Seta Esquerda */}
                <button className="nav-btn btn-prev" onClick={rolarParaEsquerda} aria-label="Anterior">
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                </button>

                {/* Esteira com Rolagem Nativa (CSS Scroll Snap) */}
                <div className="carrossel-track" ref={carrosselRef}>
                    {filmes.map((filme) => {
                        const ehFavorito = favoritos.some((f) => f.id === filme.id);

                        return (
                            <article key={filme.id} className="movie-card">
                                <h3 className="movie-title">{filme.title}</h3>

                                <div className="poster-wrapper">
                                    {/* Clicar no pôster abre o modal */}
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                        alt={filme.title}
                                        className="poster-image"
                                        onClick={() => onSelecionarFilme(filme)}
                                    />

                                    {/* Botão de Favoritar Flutuante */}
                                    <button
                                        className={`favorite-btn ${ehFavorito ? "active" : ""}`}
                                        onClick={() => favoritarFilme(filme)}
                                        aria-label="Favoritar filme"
                                    >
                                        <FontAwesomeIcon
                                            icon={ehFavorito ? faHeartSolid : faHeartRegular}
                                        />
                                    </button>
                                </div>

                                <div className="card-footer">
                                    <span className="rating-number">
                                        {filme.vote_average
                                            ? filme.vote_average.toFixed(1).padStart(4, "0")
                                            : "00.0"}
                                    </span>
                                    <div className="stars-group">
                                        {renderizarEstrelas(filme.vote_average || 0)}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Seta Direita */}
                <button className="nav-btn btn-next" onClick={rolarParaDireita} aria-label="Próximo">
                    <FontAwesomeIcon icon={faCircleChevronRight} />
                </button>
            </div>
        </div>
    );
}

export default Carrossel;