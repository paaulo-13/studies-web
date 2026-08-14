import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import MovieList from './components/MovieList.jsx'
import ModalDetalhes from './components/ModalDetalhes.jsx'

import { useState } from 'react'

function App() {
  // Estado que guarda o filme clicado. null = modal fechado
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)

  // Estado de favoritos fica aqui no topo para que Header e MovieList compartilhem
  const [favoritos, setFavoritos] = useState(() => {
    const salvo = localStorage.getItem('favoritos')
    return salvo ? JSON.parse(salvo) : []
  })

  // Função de favoritar/desfavoritar compartilhada entre todos os componentes
  function favoritarFilme(filmeClicado) {
    const jaFavorito = favoritos.some(f => f.id === filmeClicado.id)
    if (jaFavorito) {
      setFavoritos(prev => prev.filter(f => f.id !== filmeClicado.id))
    } else {
      setFavoritos(prev => {
        const nova = [...prev, filmeClicado]
        localStorage.setItem('favoritos', JSON.stringify(nova))
        return nova
      })
    }
  }

  // Fecha o modal ao clicar fora ou no X
  const fecharModal = () => setFilmeSelecionado(null)

  return (
    <div>
      <Header
        onSelecionarFilme={setFilmeSelecionado}
        favoritos={favoritos}
        favoritarFilme={favoritarFilme}
      />
      <Hero />
      <MovieList
        onSelecionarFilme={setFilmeSelecionado}
        favoritos={favoritos}
        favoritarFilme={favoritarFilme}
      />
      <Footer />

      {/* Modal de Detalhes: só aparece quando um filme é selecionado */}
      <ModalDetalhes
        filme={filmeSelecionado}
        onClose={fecharModal}
        favoritos={favoritos}
        favoritarFilme={favoritarFilme}
      />
    </div>
  )
}

export default App