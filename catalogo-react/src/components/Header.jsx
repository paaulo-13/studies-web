import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faSquareXmark } from '@fortawesome/free-solid-svg-icons'

// Recebe onSelecionarFilme para abrir o modal ao clicar em um resultado da busca
// Recebe favoritos e favoritarFilme para o modal funcionar dentro da busca
function Header({ onSelecionarFilme, favoritos, favoritarFilme }) {
    const [menuAberto, setMenuAberto] = useState(false)
    const [buscaAberta, setBuscaAberta] = useState(false)
    const [textoBusca, setTextoBusca] = useState('')
    const [resultados, setResultados] = useState([])

    useEffect(() => {
        const idDoAgendamento = setTimeout(() => {
            if (textoBusca.trim() !== '') {
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${textoBusca}&language=pt-BR`)
                    .then(res => res.json())
                    .then(data => setResultados(data.results || []))
            } else {
                setResultados([])
            }
        }, 500)

        return () => {
            clearTimeout(idDoAgendamento)
        }
    }, [textoBusca])

    // Ao clicar em um resultado: abre o modal e fecha o painel de busca
    const handleResultadoClick = (filme) => {
        onSelecionarFilme(filme)
        setBuscaAberta(false)
        setTextoBusca('')
        setResultados([])
    }

    return (
        <>
            <header>
                <button className='logo' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <FontAwesomeIcon icon={faCube} className='logo-icon' /><span>Filmes</span>
                </button>

                <nav className="nav-bar">
                    <div className="menu-desktop">
                        <ul>
                            <li><a href="#novidades">Novidades</a></li>
                            <li><a href="#populares">Populares</a></li>
                            <li><a href="#favoritos">Favoritos</a></li>
                        </ul>
                    </div>

                    <div className='full-menu'>
                        <button className='search-pill' onClick={() => setBuscaAberta(true)}>PESQUISAR</button>

                        <button className="hamburguer-btn" onClick={() => setMenuAberto(!menuAberto)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </header>

            <div className={`sidebar ${menuAberto ? 'sidebar-aberta' : ''}`}>
                <ul>
                    <li><a href="#novidades" onClick={() => setMenuAberto(false)}>Novidades</a></li>
                    <li><a href="#populares" onClick={() => setMenuAberto(false)}>Populares</a></li>
                    <li><a href="#favoritos" onClick={() => setMenuAberto(false)}>Favoritos</a></li>
                </ul>
            </div>

            <div className={`overlay ${menuAberto ? 'overlay-ativo' : ''}`}
                onClick={() => setMenuAberto(false)}>
            </div>

            <div className={`painel-busca ${buscaAberta ? 'painel-busca-aberto' : ''}`}>
                <button className='fechar-busca' onClick={() => { setBuscaAberta(false); setTextoBusca(''); setResultados([]) }}>
                    <FontAwesomeIcon icon={faSquareXmark} className='close-icon' />
                </button>

                <div className='painel-busca-conteudo'>
                    <input
                        type='text'
                        placeholder='pesquisar...'
                        autoFocus={buscaAberta}
                        value={textoBusca}
                        onChange={(e) => setTextoBusca(e.target.value)}
                    />
                </div>

                <div className='resultados-busca'>
                    {resultados.map(filme => (
                        /* Clicar em um resultado abre o modal de detalhes */
                        <div
                            key={filme.id}
                            className='resultado-item'
                            onClick={() => handleResultadoClick(filme)}
                        >
                            <img
                                src={
                                    filme.poster_path
                                        ? `https://image.tmdb.org/t/p/w200${filme.poster_path}`
                                        : 'https://placehold.co/200x300?text=Sem+imagem'
                                }
                                alt={filme.title}
                            />
                            <div className='resultado-info'>
                                <h3>{filme.title}</h3>
                                <span>{filme.vote_average ? filme.vote_average.toFixed(1) : 'N/A'}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Header