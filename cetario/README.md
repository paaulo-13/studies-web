# 🐋 CETÁRIO - Scientific Web Application

<p align="center">
  <a href="#-conceito-e-propósito">Conceito</a> •
  <a href="#-design-e-uiux">Design</a> •
  <a href="#-funcionalidades-e-animações">Funcionalidades</a> •
  <a href="#-decisões-técnicas">Decisões Técnicas</a> •
  <a href="#-stack-tecnológica">Stack</a> •
  <a href="#-como-executar">Como Executar</a>
</p>

## 💡 Conceito e Propósito

**CETÁRIO** é um site educativo e científico dedicado à divulgação de espécies de cetáceos (baleias, golfinhos e orcas). O nome faz referência à palavra "cetáceo" combinada com um sufixo que remete a herbários ou bestiários — atuando como um catálogo vivo da fauna marinha.

Este projeto foi concebido como peça principal de portfólio para demonstrar sólidas competências de Front-End. O objetivo central foi **não utilizar nenhum framework** (como React, Vue ou Bootstrap), provando domínio absoluto da base (HTML, CSS e JavaScript puros), o que é um diferencial técnico importante.

🔗 **[Acesse o projeto online aqui](https://paaulo-13.github.io/studies-web/cetario/)**

---

## 🎨 Design e UI/UX

A estética do projeto foi definida como minimalista e de alto contraste, inspirada no uso generoso de espaços em branco (estilo Apple) e em dark modes sofisticados com grids austeros (estilo Vercel). Todo o fluxo e os wireframes foram criados no **Figma** antes da implementação em código.

- **Paleta de Cores (Deep Ocean):** Utilização de tons escuros de azul-marinho e preto como base, com acentos claros. A intenção foi evocar a profundidade do oceano e a modernidade de forma elegante, evitando clichês visuais kitsch (como texturas de ondas marcadamente óbvias ou gradientes turquesa excessivos).
- **O Ícone da Navbar:** O design do ícone na barra de navegação "vaza" propositalmente do seu limite, criando um efeito visual que remete à cauda de uma baleia rompendo a superfície da água e aparecendo no céu.
- **Tipografia:** Uso da *Google Fonts*, combinando **Montserrat** e **Roboto Condensed** para criar um pareamento com forte contraste de peso entre os títulos e o corpo do texto.
- **Estrutura (One-Page):** O layout final foca no minimalismo (Hero → Carrossel de Espécies → Sobre → Footer). Textos pesados foram substituídos por blocos centralizados, garantindo respiro visual.

---

## ⚙️ Funcionalidades e Animações

- **Hero & Botão CTA Animado:** A seção inicial possui um botão principal com uma animação interativa complexa em JavaScript Vanilla. Ao ser clicado, o botão gera um efeito de *splash/ripple* (uma onda que emana exatamente a partir da coordenada de toque do mouse).
- **Carrossel de Espécies em Profundidade:** Um carrossel interativo desenhado com um efeito visual de profundidade. Os cards laterais aparecem com escala e opacidade reduzidas, simulando distância. A navegação pelos botões (Anterior/Próximo) atualiza os dados que são populados dinamicamente via JS.
- **Sistema de Modal Dinâmico:** Em vez de construir múltiplos modais escondidos, foi criado um **único modal reutilizável**. O JavaScript captura o clique, busca os dados daquele animal específico em um objeto e popula a tela com as informações corretas de forma dinâmica.

---

## 🧠 Decisões Técnicas Relevantes

Para manter um código limpo, escalável e seguir boas práticas de engenharia de software no Front-End, diversas decisões arquiteturais foram tomadas:

- **Apresentação no CSS, não nos Dados:** Quando surgiu a necessidade de deixar os nomes científicos em itálico, a decisão foi manter o HTML *fora* das strings de dados no JavaScript. O itálico foi aplicado puramente via CSS (`#cientifico { font-style: italic; }`), garantindo a separação correta entre Dado, Lógica e Apresentação.
- **Atributos `data-*` para Keying:** O controle de qual espécie deve abrir no modal é feito utilizando o atributo `data-species`. Isso é semanticamente a forma correta de armazenar um dado arbitrário vinculado a um elemento HTML, descartando o uso indevido de IDs para esse fim.
- **Notação de Colchetes no JS:** A lógica de população do modal exige acesso dinâmico às propriedades do objeto JS. Como a chave vem de uma variável em tempo de execução, foi utilizada a notação de colchetes (`objeto[chave]`) em vez de notação de ponto.
- **`textContent` vs `innerHTML`:** Optar pelo uso de `textContent` para popular os textos do modal reforçou a decisão de segurança e arquitetura de não embutir tags HTML perdidas dentro de propriedades de objetos.

---

## 🛠 Stack Tecnológica

| Camada | Escolha | Motivo / Observação |
|---|---|---|
| **Marcação** | HTML5 Semântico | Garantir boas práticas, acessibilidade base e marcação clara. |
| **Estilização** | CSS3 Puro | Demonstrar domínio total da base visual, sem dependências. |
| **Comportamento** | JavaScript Vanilla | Controle absoluto do DOM, eventos dinâmicos e animações. |
| **Ícones** | Font Awesome (CDN) | Praticidade sem adicionar peso de bibliotecas completas no projeto. |
| **Tipografia** | Google Fonts | Combinação de Montserrat e Roboto Condensed. |
| **Prototipagem**| Figma | Wireframes e protótipo visual testados antes da codificação. |
| **Hospedagem** | GitHub Pages | Gratuito, rápido e integrado nativamente ao repositório. |

---

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para testar o projeto na sua máquina:

```bash
# Clone este repositório
$ git clone https://github.com/paaulo-13/studies-web.git

# Acesse a pasta do projeto no terminal
$ cd studies-web/cetario
```
Abra o arquivo `index.html` em seu navegador de preferência ou utilize a extensão **Live Server** (no VS Code) para visualização com recarregamento automático.

---
<p align="center">Desenvolvido por <strong>Paulo Sérgio Moreira dos Santos</strong></p>
