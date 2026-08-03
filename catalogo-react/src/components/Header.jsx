import logo from '../assets/cf.png'
import { useState } from 'react'

function Header({ setBusca }) {
    const [menuAberto, setMenuAberto] = useState(false)
    return (
        <header>
            <nav className="nav-bar">
                <img className="logo" src={logo} alt="logo da pagina Catalogo filmes. é uma abreviação CF onde o c é vermelho e o f branco" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'} )} />

                <form className="search-form">
                    <input className="search-input" type="text" placeholder="Pesquise o titulo que deseja"
                    onChange={(e) => setBusca(e.target.value)}
                    />
                </form>

                {menuAberto && (
                <div className="menu-list">
                    <ul>
                        <li><a href="#novidades">Novidades</a></li>
                        <li><a href="#populares">Populares</a></li>
                        <li><a href="#favoritos">Favoritos</a></li>
                    </ul>
                </div>
                )}

                <div className="hamburguer" onClick={() => setMenuAberto(!menuAberto)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}

export default Header