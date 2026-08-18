# 🎬 Catálogo de Filmes — React & TMDB API

> Aplicação web moderna e responsiva para catálogo e busca de filmes, desenvolvida com React, CSS3 puro com arquitetura Mobile-First e integração com a API The Movie Database (TMDB).

---

## 📱 Demonstração & Layout

O projeto foi construído seguindo rigorosamente a metodologia **Mobile-First** e adaptado para **Desktop**, com suporte a toques nativos, animações fluidas e design inspirado nos principais serviços de streaming do mercado.

- **Mobile:** Menu Drawer lateral (Sidebar), carrossel com toque nativo por *CSS Scroll Snap* e grade de favoritos compacta.
- **Desktop:** Navbar flutuante em formato de pílula, carrossel de 4 itens por página com rolagem suave e grade de favoritos em 3 colunas.

---

## 🚀 Funcionalidades

- 🔍 **Busca em Tempo Real com Debounce:** Pesquisa integrada à API do TMDB com temporizador de 500ms para evitar requisições excessivas e desnecessárias.
- 🎞️ **Carrosséis com CSS Scroll Snap:** Trilha de filmes com rolagem horizontal nativa de 60fps no celular e navegação inteligente por página no computador.
- ⭐ **Cálculo Matemático de Avaliação:** Conversão automática da nota da API (escala de 0 a 10) para um sistema visual de 5 estrelas (cheias, meias e vazias).
- ❤️ **Sistema de Favoritos com Persistência:** Adicionar ou remover filmes dos favoritos em qualquer lugar do site, persistindo os dados no `localStorage` do navegador.
- 📄 **Modal de Detalhes Completo:** Ao clicar em qualquer pôster (no carrossel, na busca ou nos favoritos), um modal centralizado exibe o pôster em alta definição, sinopse detalhada e avaliação.
- 🧭 **Navegação Flutuante com Scroll Suave:** Header `sticky` com salto por âncoras ajustado via `scroll-margin-top`.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/):** Hooks (`useState`, `useEffect`, `useRef`), Componentização e Elevação de Estado (*Lifting State Up*).
- **[Vite](https://vitejs.dev/):** Build tool ultrarrápida para desenvolvimento front-end.
- **[CSS3 Puro](https://developer.mozilla.org/pt-BR/docs/Web/CSS):** CSS Variables, Flexbox, CSS Grid, Scroll Snap, Keyframe Animations e `@media queries`.
- **[FontAwesome](https://fontawesome.com/):** Biblioteca de ícones vetoriais.
- **[TMDB API](https://developer.themoviedb.org/docs):** Consumo de rotas REST (`/popular`, `/now_playing`, `/search/movie`).
- **[LocalStorage API](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage):** Persistência de dados no lado do cliente.

---

## 📦 Como Rodar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado em sua máquina.
- Uma chave de API gratuita do [The Movie Database (TMDB)](https://www.themoviedb.org/).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/paaulo-13/catalogo-react.git
   cd catalogo-react
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto com a sua chave da API do TMDB:
   ```env
   VITE_TMDB_API_KEY=sua_chave_aqui
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra `http://localhost:5173` no seu navegador.

---

## 👨‍💻 Autor

Desenvolvido por **Paulo Moreira**  
- **GitHub:** [@paaulo-13](https://github.com/paaulo-13)  
- **LinkedIn:** [Paulo Moreira](https://www.linkedin.com/in/paulosergio13/)  
- **E-mail:** [thepaulo1313@gmail.com](mailto:thepaulo1313@gmail.com)
