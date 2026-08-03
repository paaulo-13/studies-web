# 🌿 Botânica Album — Álbum Interativo de Figurinhas

> Álbum digital interativo de figurinhas botânicas com efeito de virada de página realista, integração com API REST em Python e som gerado via Web Audio API.

![HTML5](https://img.shields.io/badge/HTML5-estrutura-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-estilização-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-FastAPI-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-backend-009688?style=for-the-badge&logo=fastapi&logoColor=white)

---

## 📋 Sobre o Projeto

O **Botânica Album** é um álbum digital interativo de coleção de figurinhas com temática botânica, desenvolvido durante a **Imersão Julho 2026 da Alura**. O projeto simula a experiência nostálgica de um álbum físico de figurinhas, com páginas que viram realisticamente, coleção organizada por categorias e imagens carregadas dinamicamente via uma API própria.

> **Nota de transparência:** O código do **frontend** (HTML, CSS e JavaScript) foi desenvolvido pela Alura como base do projeto da imersão. Minha contribuição principal foi o desenvolvimento completo do **backend** em Python com FastAPI, responsável por servir as imagens das figurinhas para o álbum.

---

## ✨ Funcionalidades

### 📖 Livro Interativo com Virada de Página Real
- Utiliza a biblioteca **[StPageFlip](https://nodlik.github.io/StPageFlip/)** para criar um livro com física de dobra de páginas realista e animada
- As páginas viram com perspectiva 3D, sombra dinâmica e efeito de curvatura suave
- Configuração customizada: `flippingTime: 800ms`, sombra com `maxShadowOpacity: 0.4` e suporte completo ao mobile

### 👆 Sistema de Arraste Customizado
- O arraste para virar páginas foi **reescrito do zero** sobre a biblioteca, com detecção de limiar de movimento (`>10px`) para evitar viradas acidentais ao clicar
- Funciona tanto com **mouse** (mousedown/mousemove/mouseup) quanto com **touch** (touchstart/touchmove/touchend)
- O canto correto da página (superior/inferior, esquerda/direita) é calculado automaticamente com base na posição do clique e no índice da página

### ⌨️ Navegação por Teclado e Botões
- Setas `←` e `→` do teclado para virar páginas
- Botões `‹` e `›` visíveis na interface, que se ocultam automaticamente:
  - Botão esquerdo fica oculto na capa (primeira página)
  - Botão direito fica oculto na contracapa (última página)

### 🔊 Som de Virada de Página (Web Audio API)
- Som de virada de página **sintetizado programaticamente** usando a **Web Audio API** — sem arquivos de áudio externos
- O som é gerado com ruído branco filtrado por um **bandpass filter** com varredura de frequência (1500Hz → 350Hz), criando o efeito característico de folhear papel
- Um **lowpass filter** adicional remove artefatos digitais de alta frequência
- Crackling de papel é simulado com spikes aleatórios de amplitude
- Botão de **ligar/deslivar o som** com troca de ícone SVG

### 🌿 Coleção de 30 Figurinhas em 6 Categorias

| Categoria | Espécies |
|---|---|
| 🌿 **Folhagens** | Costela-de-adão, Jiboia, Zamioculca, Espada-de-São-Jorge, Comigo-ninguém-pode |
| 🌸 **Floríferas** | Antúrio, Orquídea Phalaenopsis, Kalanchoe, Rosa, Hibisco |
| 🍎 **Frutíferas** | Limoeiro, Mangueira, Goiabeira, Jabuticabeira, Aceroleira |
| 🌳 **Árvores** | Ipê-amarelo, Oitizeiro, Flamboyant, Sibipiruna, Pau-brasil |
| 🌵 **Suculentas e Cactos** | Rosa-de-pedra, Babosa, Jade, Cacto Mandacaru, Cacto Orelha-de-Coelho |
| 🌎 **Nativas do Brasil** | Pau-brasil, Vitória-régia, Ipê-roxo, Araucária, Embaúba |

### 🖼️ Carregamento Dinâmico de Figurinhas via API
- Ao inicializar, o frontend faz uma requisição `GET /figurinhas` ao backend local
- As imagens são inseridas dinamicamente nos slots do álbum via `fetch` + criação de elementos `<img>` via JavaScript
- Slots preenchidos recebem a classe `.slot-preenchido` ao carregar com sucesso
- Em caso de falha na conexão com a API, o álbum funciona normalmente com os slots vazios (graceful degradation)

---

## 🔧 Backend — API com FastAPI (Python)

> Esta foi a parte desenvolvida por mim durante a imersão.

### Tecnologias
- **Python 3** com **FastAPI** para criação da API REST
- **Uvicorn** como servidor ASGI
- **CORS habilitado** para permitir comunicação com o frontend rodando em outra porta

### Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/` | Mensagem de boas-vindas da API |
| `GET` | `/figurinhas` | Retorna a lista completa de 30 figurinhas (id, nome, categoria, imagem_url) |
| `GET` | `/figurinhas/{id}/imagem` | Serve o arquivo de imagem da figurinha pelo ID |

### Lógica de Busca de Imagens

```python
@app.get("/figurinhas/{id}/imagem")
def imagem_figurinha(id: int):
    # Monta padrão glob: id=1 → "01[!0-9]*" (evita conflito com 10, 11...)
    padrao = os.path.join(PASTA_IMAGENS, f"{id:02d}[!0-9]*")
    arquivos = glob.glob(padrao)

    if not arquivos:
        raise HTTPException(status_code=404, detail=f"Imagem #{id} não encontrada.")

    return FileResponse(arquivos[0])
```

O padrão `[!0-9]` após os dois dígitos garante que o id `1` não confunda com `10` ou `11`.

---

## 🧱 Estrutura do Projeto

```
figurinhas-alura/
├── index.html        # Álbum completo: capa, 6 páginas de conteúdo e contracapa
├── style.css         # Estilos do álbum, slots, efeitos e responsividade
├── app.js            # Lógica do frontend: StPageFlip, arraste, som, navegação e fetch da API
└── backend/
    ├── main.py       # API FastAPI com 3 endpoints e lógica de servir imagens
    └── figurinhas/   # Pasta com as imagens das 30 figurinhas (formato: 01-nome.webp)
```

---

## 🚀 Como Executar

### Frontend + Backend juntos

**1. Inicie o backend:**
```bash
cd backend

# Instale as dependências (apenas na primeira vez)
pip install fastapi uvicorn

# Inicie o servidor
uvicorn main:app --reload
```

O backend ficará disponível em `http://localhost:8000`.

**2. Abra o frontend:**

Abra o arquivo `index.html` no navegador, ou utilize a extensão **Live Server** do VS Code.

> O álbum funciona mesmo sem o backend ativo. Nesse caso, as figurinhas não são exibidas nos slots, mas toda a mecânica do livro permanece funcional.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica do álbum com todas as páginas e slots |
| **CSS3** | Estilização, glassmorphism, efeitos visuais e responsividade |
| **JavaScript (ES2020+)** | `async/await`, `fetch`, Web Audio API, manipulação do DOM |
| **StPageFlip** | Biblioteca para efeito de virada de página 3D realista |
| **Web Audio API** | Síntese de som de papel sem arquivos de áudio externos |
| **Python 3** | Linguagem do backend |
| **FastAPI** | Framework web para construção da API REST |
| **Uvicorn** | Servidor ASGI para servir a aplicação FastAPI |
| **glob** | Busca de arquivos de imagem no sistema de arquivos |

---

## 👤 Autor — Parte de Backend

**Paulo Moreira**
Estudante de Análise e Desenvolvimento de Sistemas — UNIJORGE

> O frontend deste projeto foi desenvolvido pela equipe da **Alura** como base da Imersão Julho 2026. O backend em Python/FastAPI foi desenvolvido integralmente por mim como parte dos exercícios da imersão.

[![GitHub](https://img.shields.io/badge/GitHub-paaulo--13-181717?style=flat-square&logo=github)](https://github.com/paaulo-13?tab=repositories)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-paulosergio13-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/paulosergio13/)
[![Email](https://img.shields.io/badge/Email-thepaulo1313@gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:thepaulo1313@gmail.com)
