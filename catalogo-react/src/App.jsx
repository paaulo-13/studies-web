import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx' 
import MovieList from './components/MovieList.jsx'

import { useState } from 'react'

function App() {

  const [busca, setBusca] = useState('');

  return (
    <div>
      <Header setBusca={setBusca} />
      <Hero />
      <MovieList busca={busca} />
      <Footer />
    </div>
  )
}

export default App