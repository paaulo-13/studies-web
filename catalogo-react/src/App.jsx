import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import MovieList from './components/MovieList.jsx'
import ModalDetalhes from './components/ModalDetalhes.jsx'
import { useState } from 'react'

function App() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)
  const [favoritos, setFavoritos] = useState(() => {
    const salvo = localStorage.getItem('favoritos')
    return salvo ? JSON.parse(salvo) : []
  })

  function favoritarFilme(filmeClicado) {
    const jaFavorito = favoritos.some(f => f.id === filmeClicado.id)
    if (jaFavorito) {
      setFavoritos(prev => {
        const nova = prev.filter(f => f.id !== filmeClicado.id)
        localStorage.setItem('favoritos', JSON.stringify(nova))
        return nova
      })
    } else {
      setFavoritos(prev => {
        const nova = [...prev, filmeClicado]
        localStorage.setItem('favoritos', JSON.stringify(nova))
        return nova
      })
    }
  }

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