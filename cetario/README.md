# 🐋 Cetário — Explorando os Cetáceos

> Site educativo e interativo sobre as principais espécies de cetáceos do mundo, com carrossel animado, modal de detalhes e design oceânico imersivo.

![HTML5](https://img.shields.io/badge/HTML5-semântico-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-animações-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsivo](https://img.shields.io/badge/Design-Responsivo-4CAF50?style=for-the-badge&logo=responsive-design&logoColor=white)

---

## 📋 Sobre o Projeto

O **Cetário** é um site de página única (one-page) com tema oceânico dedicado a apresentar e divulgar informações sobre cetáceos — a família que inclui baleias, golfinhos e botos. O projeto foi desenvolvido integralmente com **HTML, CSS e JavaScript puro** (sem frameworks), e foi criado como peça central do meu portfólio de frontend.

A proposta foi unir curiosidade pessoal por biologia marinha com a prática de conceitos essenciais do frontend: manipulação do DOM, eventos, carrossel customizado, modais dinâmicos e CSS animado.

---

## ✨ Funcionalidades

### 🌊 Animação de Splash na Entrada
- Ao carregar a página, uma animação de ondas (`#splash`) é exibida, criando uma experiência de "mergulho" imersiva antes do conteúdo aparecer
- O botão **"Explore"** da seção hero dispara uma animação de partículas de água geradas dinamicamente via JavaScript: bolhas de tamanhos e posições aleatórias surgem e desaparecem com animação CSS

### 🎠 Carrossel de Espécies
- Apresenta **7 espécies** de cetáceos em um carrossel horizontal deslizante
- Navegação pelos botões `‹` e `›` (anterior e próximo), com lógica de limites para não ultrapassar o início ou fim
- O item central recebe a classe `.destaque`, com efeito visual de escala e destaque em relação aos demais
- O carrossel é **responsivo**: em dispositivos móveis (`<= 768px`) utiliza `100vw` por item, e em desktop usa `40vw`, com offset calculado dinamicamente via `calcularOffset()`
- Ao redimensionar a janela, a posição é recalculada automaticamente com o evento `resize`

### 🔍 Modal de Detalhes por Espécie
- Ao clicar em qualquer card do carrossel, um **modal** é aberto com informações científicas detalhadas da espécie selecionada
- O modal exibe: **nome popular, nome científico, grupo taxonômico, estado de conservação, peso, tamanho, alimentação, distribuição geográfica e curiosidade**
- A imagem do animal é posicionada com um `transform` específico para cada espécie, criando composições visuais únicas dentro do modal
- O modal é fechado pelo botão `×` no canto superior

### 📱 Menu Hambúrguer
- A navbar possui um botão hambúrguer que exibe/oculta o menu de navegação via `classList.toggle('aberto')`
- O menu contém links para as seções: Espécies, Sobre e Contato

### 🎨 Design Oceânico Imersivo
- Paleta de cores inspirada no oceano com variáveis CSS (`--ocean-light`, etc.)
- Tipografia com **Montserrat**, **Roboto** e **Roboto Condensed** (Google Fonts)
- Ícones sociais integrados via **Font Awesome 7**
- Animações CSS suaves em todo o carrossel e nos elementos interativos

### 🐬 Espécies Catalogadas

| # | Nome Popular | Nome Científico | Grupo |
|---|---|---|---|
| 1 | Baleia Azul | *Balaenoptera musculus* | Baleia de barbatanas |
| 2 | Jubarte | *Megaptera novaeangliae* | Baleia de barbatanas |
| 3 | Franca do Pacífico Norte | *Eubalaena japonica* | Baleia de barbatanas |
| 4 | Nariz de Garrafa | *Tursiops truncatus* | Golfinho |
| 5 | Orca | *Orcinus orca* | Golfinho oceânico |
| 6 | Cachalote | *Physeter macrocephalus* | Baleia dentada |
| 7 | Beluga | *Delphinapterus leucas* | Baleia dentada |

---

## 🧱 Estrutura do Projeto

```
cetario/
├── index.html          # Estrutura semântica completa da página
├── css/
│   └── style.css       # Todos os estilos, variáveis, animações e responsividade
├── scripts/
│   └── script.js       # Toda a lógica de interação: carrossel, modal, splash, hambúrguer
└── assets/
    └── images/         # Imagens das espécies e assets visuais
```

### Estrutura Semântica da Página

```
<header>  → Navbar com logo e menu hambúrguer
<main>
  <section #hero>     → Título principal e botão de entrada animado
  <section #species>  → Carrossel de cetáceos com botões de navegação
  <section #about>    → Texto sobre o projeto
<footer #contact>     → Informações do autor com links sociais
<div #splash>         → Overlay de animação de ondas de entrada
<div #modal>          → Modal de detalhes da espécie clicada
```

---

## ⚙️ Lógica JavaScript — Principais Mecanismos

### Carrossel Adaptativo
```js
function calcularOffset(indice) {
    if (isMobile()) {
        return -indice * 100; // 100vw por item no mobile
    } else {
        return 30 - indice * 40; // 40vw por item no desktop
    }
}
```

### Gerador de Partículas de Água
```js
// Cria 8 bolhas com tamanho e posição aleatórios
for (let i = 0; i < 8; i++) {
    let gota = document.createElement('div');
    let tamanho = Math.random() * 22 + 8;
    // ... animação CSS com remoção automática após 1.2s
}
```

### Objeto de Dados — Espécies
Cada espécie é armazenada como um objeto JavaScript com todos os seus atributos e um valor de `transform` customizado para posicionamento da imagem no modal:
```js
let especies = {
    azul: { nome, cientifico, grupo, conservacao, peso, tamanho, alimentacao, distribuicao, curiosidade, transform },
    jubarte: { ... },
    // ...
}
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5 Semântico** | Estrutura acessível com `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<dl>` |
| **CSS3** | Layout responsivo, variáveis CSS, keyframes, transições e pseudo-elementos |
| **JavaScript ES6** | Manipulação do DOM, eventos, geração dinâmica de elementos, lógica do carrossel e modal |
| **Google Fonts** | Montserrat, Roboto e Roboto Condensed |
| **Font Awesome 7** | Ícones de redes sociais (GitHub e LinkedIn) |

---

## 🚀 Como Executar

Este projeto não requer nenhuma instalação ou build. Basta abrir o arquivo diretamente no navegador:

```bash
# Clone o repositório
git clone https://github.com/paaulo-13/cetario.git

# Abra no navegador
# Opção 1: Clique duplo em index.html
# Opção 2: Use a extensão Live Server no VS Code
```

---

## 👤 Autor

**Paulo Moreira**
Estudante de Análise e Desenvolvimento de Sistemas — UNIJORGE

> *"Os cetáceos são animais incríveis e misteriosos e entender mais sobre criaturas tão diversas e versáteis em nosso mundo é um prazer imenso."*

[![GitHub](https://img.shields.io/badge/GitHub-paaulo--13-181717?style=flat-square&logo=github)](https://github.com/paaulo-13?tab=repositories)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-paulosergio13-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/paulosergio13/)
[![Email](https://img.shields.io/badge/Email-thepaulo1313@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:thepaulo1313@gmail.com)
