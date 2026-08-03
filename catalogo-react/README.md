# 🎬 Catálogo de Filmes

> Aplicação web de catálogo de filmes construída com **React 19** e integrada à **API do TMDB**, com sistema de busca em tempo real e favoritos persistidos localmente.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TMDB](https://img.shields.io/badge/TMDB_API-integrado-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)

---

## 📋 Sobre o Projeto

O **Catálogo de Filmes** é uma SPA (Single Page Application) desenvolvida com React que permite ao usuário explorar, pesquisar e favoritar filmes diretamente de uma interface moderna e responsiva. Os dados são consumidos em tempo real da API oficial do [The Movie Database (TMDB)](https://www.themoviedb.org/).

O projeto foi desenvolvido como parte do meu portfólio inicial de frontend, com foco em demonstrar o uso de React com hooks, consumo de APIs REST e gerenciamento de estado local.

---

## ✨ Funcionalidades

### 🔍 Busca em Tempo Real
- Campo de pesquisa integrado ao `Header`, com estado controlado via `useState` e passado como prop para o componente de listagem
- A busca é feita de forma reativa: a cada caractere digitado, uma requisição é enviada à API do TMDB (`/search/movie`) e os resultados aparecem instantaneamente
- Quando o campo está vazio, a seção de resultados desaparece automaticamente e o layout volta ao normal

### 🎞️ Seção de Novidades
- Consome o endpoint `/movie/now_playing` da API TMDB, exibindo os filmes que estão atualmente em cartaz nos cinemas
- Exibe pôster, título e nota de avaliação de cada filme
- Layout em grade adaptável para diferentes tamanhos de tela

### 🔥 Seção de Populares
- Consome o endpoint `/movie/popular`, trazendo os filmes mais populares do momento
- Mesma estrutura de card, com visual diferenciado para destacar os mais populares

### ❤️ Sistema de Favoritos com Persistência
- Cada filme exibe um ícone de coração: `🤍` (não favoritado) e `❤️` (favoritado)
- Ao clicar, o filme é adicionado ou removido da lista de favoritos com lógica de toggle
- Os favoritos são **persistidos no `localStorage`** do navegador — eles continuam salvos mesmo após fechar o navegador ou atualizar a página
- A seção "Favoritos" exibe todos os filmes salvos em uma grade dedicada, com a mensagem *"Nenhum filme favoritado ainda."* quando a lista estiver vazia

### 🍔 Menu Hambúrguer Responsivo
- O `Header` conta com um menu hambúrguer funcional, controlado com `useState`
- Ao clicar, um dropdown aparece com links de navegação para as seções: Novidades, Populares e Favoritos

### 🖱️ Scroll Suave
- O clique no logo do site aciona `window.scrollTo` com `behavior: 'smooth'`, retornando o usuário ao topo da página suavemente

---

## 🧱 Arquitetura e Componentes

O projeto segue a arquitetura de componentes do React, com separação clara de responsabilidades:

```
src/
├── App.jsx           # Componente raiz: gerencia o estado de busca e compõe a página
├── main.jsx          # Ponto de entrada da aplicação
├── index.css         # Estilos globais
└── components/
    ├── Header.jsx    # Navbar com logo, campo de busca e menu hambúrguer
    ├── Hero.jsx      # Seção de destaque visual (banner)
    ├── MovieList.jsx # Lógica de consumo da API e renderização de todos os catálogos
    └── Footer.jsx    # Rodapé com informações do autor e links sociais
```

### Fluxo de Dados (Props & State)

```
App.jsx
 ├── estado: busca (string)
 ├── → Header.jsx  recebe: setBusca (função)
 └── → MovieList.jsx  recebe: busca (string)
```

- O `App` centraliza o estado `busca` e distribui via props
- `MovieList` gerencia seus próprios estados internos: `resultadosBusca`, `populares`, `novidades` e `favoritos`

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **React 19** | Construção de componentes e gerenciamento de estado com hooks |
| **Vite 8** | Bundler e servidor de desenvolvimento ultra-rápido |
| **JavaScript ES6+** | Lógica da aplicação (fetch, arrow functions, desestruturação) |
| **TMDB API** | Fonte de dados de filmes (populares, novidades e busca) |
| **CSS** | Estilização responsiva dos componentes |
| **localStorage** | Persistência dos filmes favoritos no navegador |

### Hooks do React Utilizados
- `useState` — gerenciamento de estado local (busca, favoritos, listas de filmes)
- `useEffect` — chamadas assíncronas à API e sincronização com o localStorage

---

## 🚀 Como Executar Localmente

**Pré-requisitos:** Node.js 18+ e npm instalados.

```bash
# Clone o repositório
git clone https://github.com/paaulo-13/catalogo-react.git

# Entre na pasta do projeto
cd catalogo-react

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

---

## 📡 API Utilizada

Este projeto consome a [API do The Movie Database (TMDB)](https://developer.themoviedb.org/).

| Endpoint | Descrição |
|---|---|
| `/movie/popular` | Lista os filmes mais populares |
| `/movie/now_playing` | Lista os filmes atualmente em cartaz |
| `/search/movie?query={termo}` | Busca filmes por título |

> Todas as requisições utilizam o parâmetro `language=pt-BR` para retornar os dados em português.

---

## 👤 Autor

**Paulo Moreira**
Estudante de Análise e Desenvolvimento de Sistemas — UNIJORGE

[![GitHub](https://img.shields.io/badge/GitHub-paaulo--13-181717?style=flat-square&logo=github)](https://github.com/paaulo-13?tab=repositories)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-paulosergio13-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/paulosergio13/)
[![Email](https://img.shields.io/badge/Email-thepaulo1313@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:thepaulo1313@gmail.com)
