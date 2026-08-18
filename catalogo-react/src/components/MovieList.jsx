import Carrossel from "./Carrossel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurst, faFire, faHeart } from "@fortawesome/free-solid-svg-icons";

function MovieList({ onSelecionarFilme, favoritos, favoritarFilme }) {
    return (
        <main>
            <section id="MovieList">
                <Carrossel
                    id="novidades"
                    titulo="Novidades"
                    icone={faBurst}
                    endpoint="now_playing"
                    favoritos={favoritos}
                    favoritarFilme={favoritarFilme}
                    onSelecionarFilme={onSelecionarFilme}
                />

                <Carrossel
                    id="populares"
                    titulo="Populares"
                    icone={faFire}
                    endpoint="popular"
                    favoritos={favoritos}
                    favoritarFilme={favoritarFilme}
                    onSelecionarFilme={onSelecionarFilme}
                />

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