import Carrossel from "./Carrossel";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurst, faFire, faHeart } from "@fortawesome/free-solid-svg-icons";

// Recebe favoritos e favoritarFilme do App.jsx (estado centralizado)
// Recebe onSelecionarFilme para abrir o modal ao clicar em um pôster
function MovieList({ onSelecionarFilme, favoritos, favoritarFilme }) {

    // Agora apenas busca os filmes da API — favoritos vivem no App.jsx
    useEffect(() => {
        // O MovieList não gerencia mais favoritos, apenas os recebe via prop
    }, [favoritos]);

    return (
        <main>
            <section id="MovieList">

                {/* Carrossel de Novidades */}
                <Carrossel
                    titulo="Novidades"
                    icone={faBurst}
                    endpoint="now_playing"
                    favoritos={favoritos}
                    favoritarFilme={favoritarFilme}
                    onSelecionarFilme={onSelecionarFilme}
                />

                {/* Carrossel de Populares */}
                <Carrossel
                    titulo="Populares"
                    icone={faFire}
                    endpoint="popular"
                    favoritos={favoritos}
                    favoritarFilme={favoritarFilme}
                    onSelecionarFilme={onSelecionarFilme}
                />

                {/* Grade 2 Colunas de Favoritos */}
                <div className="container-list" id="favoritos">
                    <h2 className="title-pill">
                        <FontAwesomeIcon icon={faHeart} className="icons-sec" />
                        <span>Favoritos</span>
                    </h2>

                    {favoritos.length === 0 ? (
                        <p className="mensagem-vazio">Nenhum filme favoritado ainda.</p>
                    ) : (
                        <div className="grid-favoritos">
                            {favoritos.map((filme) => (
                                <article key={filme.id} className="fav-card">
                                    {/* Clicar no pôster abre o modal */}
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                                        alt={filme.title}
                                        className="fav-poster"
                                        onClick={() => onSelecionarFilme(filme)}
                                    />
                                    <button
                                        className="fav-remove-btn"
                                        onClick={() => favoritarFilme(filme)}
                                        aria-label="Remover dos favoritos"
                                    >
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </article>
                            ))}
                        </div>
                    )}
                </div>

            </section>
        </main>
    );
}

export default MovieList;