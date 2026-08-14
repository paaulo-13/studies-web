import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faStar as faStarSolid, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular, faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

function ModalDetalhes({ filme, onClose, favoritos, favoritarFilme }) {
    // Se nenhum filme foi selecionado, o modal não desenha nada
    if (!filme) return null;

    const ehFavorito = favoritos.some((f) => f.id === filme.id);

    // Função de estrelas (mesma lógica do carrossel)
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

    return (
        <>
            {/* Overlay escuro de fundo - clicar nele fecha o modal */}
            <div className="modal-overlay" onClick={onClose}></div>

            {/* Caixa Central do Modal */}
            <div className="modal-container">
                {/* Botão X de Fechar no topo */}
                <button className="modal-close-btn" onClick={onClose} aria-label="Fechar">
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                {/* Pôster com Botão de Coração */}
                <div className="modal-poster-wrapper">
                    <img
                        src={
                            filme.poster_path
                                ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
                                : "https://placehold.co/500x750?text=Sem+Imagem"
                        }
                        alt={filme.title}
                        className="modal-poster-img"
                    />
                    <button
                        className={`favorite-btn ${ehFavorito ? "active" : ""}`}
                        onClick={() => favoritarFilme(filme)}
                        aria-label="Favoritar filme"
                    >
                        <FontAwesomeIcon icon={ehFavorito ? faHeartSolid : faHeartRegular} />
                    </button>
                </div>

                {/* Título do Filme */}
                <h2 className="modal-title">{filme.title}</h2>

                {/* Sinopse da API (overview) */}
                <p className="modal-overview">
                    {filme.overview && filme.overview.trim() !== ""
                        ? filme.overview
                        : "Sinopse não disponível para este filme."}
                </p>

                {/* Rodapé: Nota e Estrelas */}
                <div className="modal-footer">
                    <span className="rating-number">
                        {filme.vote_average
                            ? filme.vote_average.toFixed(1).padStart(4, "0")
                            : "00.0"}
                    </span>
                    <div className="stars-group">
                        {renderizarEstrelas(filme.vote_average || 0)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalDetalhes;