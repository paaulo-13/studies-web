from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import glob

# Inicializa a aplicação FastAPI
app = FastAPI()

# ===================================================
# CORS - Permite que o frontend (rodando em outra porta)
# consiga conversar com este servidor sem ser bloqueado
# pelo navegador.
# Analogia: é como dar um "passe de entrada" para qualquer
# visitante, não importa de onde ele venha.
# ===================================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],      # Aceita requisições de qualquer origem
    allow_methods=["*"],      # Aceita qualquer método (GET, POST, etc.)
    allow_headers=["*"],      # Aceita qualquer cabeçalho HTTP
)

# ===================================================
# CAMINHOS - Define onde estão as imagens no disco.
# os.path.abspath(__file__) → caminho completo deste arquivo main.py
# os.path.dirname(...)      → pega só a pasta onde ele está
# os.path.join(...)         → junta com "figurinhas" para achar a subpasta
# ===================================================
PASTA_BASE = os.path.dirname(os.path.abspath(__file__))
PASTA_IMAGENS = os.path.join(PASTA_BASE, "figurinhas")

# ===================================================
# LISTA DE FIGURINHAS
# Cada figurinha tem: id, nome, categoria e imagem_url.
# O imagem_url aponta para o endpoint que entrega a imagem.
# Figurinhas sem imagem na pasta estão comentadas (# na frente).
# ===================================================
figurinhas = [
    # --- FOLHAGENS ---
    {"id": 1,  "nome": "Costela-de-adão",       "categoria": "Folhagens",          "imagem_url": "/figurinhas/1/imagem"},
    {"id": 2,  "nome": "Jiboia",                 "categoria": "Folhagens",          "imagem_url": "/figurinhas/2/imagem"},
    {"id": 3,  "nome": "Zamioculca",           "categoria": "Folhagens",          "imagem_url": "/figurinhas/3/imagem"},
    {"id": 4,  "nome": "Espada-de-São-Jorge",  "categoria": "Folhagens",          "imagem_url": "/figurinhas/4/imagem"},
    {"id": 5,  "nome": "Comigo-ninguém-pode",  "categoria": "Folhagens",          "imagem_url": "/figurinhas/5/imagem"},

    # --- FLORÍFERAS ---
    {"id": 6,  "nome": "Antúrio",              "categoria": "Floríferas",         "imagem_url": "/figurinhas/6/imagem"},
    {"id": 7,  "nome": "Orquídea Phalaenopsis","categoria": "Floríferas",         "imagem_url": "/figurinhas/7/imagem"},
    {"id": 8,  "nome": "Kalanchoe",            "categoria": "Floríferas",         "imagem_url": "/figurinhas/8/imagem"},
    {"id": 9,  "nome": "Rosa",                 "categoria": "Floríferas",         "imagem_url": "/figurinhas/9/imagem"},
    {"id": 10, "nome": "Hibisco",              "categoria": "Floríferas",         "imagem_url": "/figurinhas/10/imagem"},

    # --- FRUTÍFERAS ---
    {"id": 11, "nome": "Limoeiro",             "categoria": "Frutíferas",         "imagem_url": "/figurinhas/11/imagem"},
    {"id": 12, "nome": "Mangueira",            "categoria": "Frutíferas",         "imagem_url": "/figurinhas/12/imagem"},
    {"id": 13, "nome": "Goiabeira",            "categoria": "Frutíferas",         "imagem_url": "/figurinhas/13/imagem"},
    {"id": 14, "nome": "Jabuticabeira",        "categoria": "Frutíferas",         "imagem_url": "/figurinhas/14/imagem"},
    {"id": 15, "nome": "Aceroleira",           "categoria": "Frutíferas",         "imagem_url": "/figurinhas/15/imagem"},

    # --- ÁRVORES ---
    {"id": 16, "nome": "Ipê-amarelo",          "categoria": "Árvores",            "imagem_url": "/figurinhas/16/imagem"},
    {"id": 17, "nome": "Oitizeiro",            "categoria": "Árvores",            "imagem_url": "/figurinhas/17/imagem"},
    {"id": 18, "nome": "Flamboyant",           "categoria": "Árvores",            "imagem_url": "/figurinhas/18/imagem"},
    {"id": 19, "nome": "Sibipiruna",           "categoria": "Árvores",            "imagem_url": "/figurinhas/19/imagem"},
    {"id": 20, "nome": "Pau-brasil",           "categoria": "Árvores",            "imagem_url": "/figurinhas/20/imagem"},

    # --- SUCULENTAS E CACTOS ---
    {"id": 21, "nome": "Rosa-de-pedra",        "categoria": "Suculentas e Cactos","imagem_url": "/figurinhas/21/imagem"},
    {"id": 22, "nome": "Babosa",               "categoria": "Suculentas e Cactos","imagem_url": "/figurinhas/22/imagem"},
    {"id": 23, "nome": "Jade",                 "categoria": "Suculentas e Cactos","imagem_url": "/figurinhas/23/imagem"},
    {"id": 24, "nome": "Cacto Mandacaru",      "categoria": "Suculentas e Cactos","imagem_url": "/figurinhas/24/imagem"},
    {"id": 25, "nome": "Cacto Orelha-de-Coelho","categoria": "Suculentas e Cactos","imagem_url": "/figurinhas/25/imagem"},

    # --- NATIVAS DO BRASIL ---
    {"id": 26, "nome": "Pau-brasil",           "categoria": "Nativas do Brasil",  "imagem_url": "/figurinhas/26/imagem"},
    {"id": 27, "nome": "Vitória-régia",        "categoria": "Nativas do Brasil",  "imagem_url": "/figurinhas/27/imagem"},
    {"id": 28, "nome": "Ipê-roxo",             "categoria": "Nativas do Brasil",  "imagem_url": "/figurinhas/28/imagem"},
    {"id": 29, "nome": "Araucária",            "categoria": "Nativas do Brasil",  "imagem_url": "/figurinhas/29/imagem"},
    {"id": 30, "nome": "Embaúba",              "categoria": "Nativas do Brasil",  "imagem_url": "/figurinhas/30/imagem"},
]


# ===================================================
# ENDPOINT: GET /
# Rota raiz — apenas uma mensagem de boas-vindas
# ===================================================
@app.get("/")
def hello_world():
    return {"mensagem": "Olá, mundo! 🌍 Bem-vindo à API do Álbum Botânica!"}


# ===================================================
# ENDPOINT: GET /figurinhas
# Retorna a lista completa de figurinhas disponíveis
# ===================================================
@app.get("/figurinhas")
def listar_figurinhas():
    return figurinhas


# ===================================================
# ENDPOINT: GET /figurinhas/{id}/imagem
# Entrega o arquivo de imagem de uma figurinha pelo ID.
#
# Como funciona:
# 1. Monta um padrão de busca: ex. id=1 → "01[!0-9]*"
#    O [!0-9]* significa: "qualquer caractere que NÃO seja número"
#    Isso evita confundir id=1 com id=10, id=11, etc.
# 2. Usa glob() para procurar o arquivo na pasta figurinhas/
# 3. Se não achar, retorna erro 404
# 4. Se achar, devolve o arquivo de imagem
# ===================================================
@app.get("/figurinhas/{id}/imagem")
def imagem_figurinha(id: int):
    # Formata o id com dois dígitos: 1 → "01", 10 → "10"
    padrao = os.path.join(PASTA_IMAGENS, f"{id:02d}[!0-9]*")

    # glob() retorna uma lista de arquivos que batem com o padrão
    arquivos = glob.glob(padrao)

    if not arquivos:
        raise HTTPException(
            status_code=404,
            detail=f"Imagem da figurinha #{id} não encontrada."
        )

    # Pega o primeiro arquivo encontrado (ex: "01-costela-de-adao.webp")
    arquivo = arquivos[0]

    return FileResponse(arquivo)
