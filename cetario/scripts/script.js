let hamburguer = document.querySelector('.hamburguer');
let navMenu = document.querySelector('.nav-menu');
let btnPrev = document.querySelector('#prev');
let btnNext = document.querySelector('#next');
let btnExplore = document.querySelector('.explore');
let splash = document.querySelector('#splash');
let carousel = document.querySelector('#carousel');
let modal = document.querySelector('#modal');
let indiceAtual = 0;
let modalClose = document.querySelector('#modal-close');
let articles = document.querySelectorAll('#carousel article');
let modalNome = document.querySelector('#modal-card h3');
let modalCientifico = document.querySelector('#cientifico');
let modalGrupo = document.querySelector('#grupo');
let modalConservacao = document.querySelector('#conservacao');
let modalPeso = document.querySelector('#peso');
let modalTamanho = document.querySelector('#tamanho');
let modalAlimentacao = document.querySelector('#alimentacao');
let modalDistribuicao = document.querySelector('#distribuicao');
let modalCuriosidade = document.querySelector('#curiosidade');
let modalImage = document.querySelector('#modal-image');

let especies = {
  azul: {
    nome: "Azul",
    cientifico: "Balaenoptera musculus",
    grupo: "Baleia de barbatanas",
    conservacao: "Em perigo",
    peso: "72-140 toneladas",
    tamanho: "25-33 metros",
    alimentacao: "Krill e pequenos crustáceos",
    distribuicao: "Todos os oceanos",
    curiosidade: "O maior animal que já existiu na Terra.",
    transform: 'translateX(-40%)',
  },
  jubarte: {
    nome: "Jubarte",
    cientifico: "Megaptera novaeangliae",
    grupo: "Baleia de barbatanas",
    conservacao: "Pouco preocupante",
    peso: "25-40 toneladas",
    tamanho: "12-18 metros",
    alimentacao: "Krill, plâncton e pequenos peixes",
    distribuicao: "Oceanos Atlântico, Pacífico e Índico",
    curiosidade: "Conhecida por ser a artista do mar por conta dos seus cantos e perfomance acrobática.",
    transform: 'translateX(-40%) translateY(4%)',
  },
  franca: {
    nome: "Franca do pacífico norte",
    cientifico: "Eubalaena japonica",
    grupo: "Baleia de barbatanas",
    conservacao: "Em perigo",
    peso: "50-100 toneladas",
    tamanho: "15-18 metros",
    alimentacao: "Zooplâncton e pequenos crustáceos",
    distribuicao: "Pacífico Norte",
    curiosidade: "Seu borrifo pode ter um formato de coração",
    transform: 'translateX(-49%) translateY(-3%) rotate(15deg)',
  },
  garrafa: {
    nome: "Nariz de garrafa",
    cientifico: "Tursiops truncatus",
    grupo: "Golfinho",
    conservacao: "Pouco preocupante",
    peso: "150-650 kg",
    tamanho: "2-4 metros",
    alimentacao: "Peixes, lulas e crustáceos",
    distribuicao: "Mares tropicais e temperados de todo o mundo",
    curiosidade: "Utiliza esponjas-do-mar para se proteger de rochas e conchas enquanto caça suas presas",
    transform: 'translateX(-40%) translateY(-3%) rotate(0deg)',
  },
  orca: {
    nome: "Orca",
    cientifico: "Orcinus orca",
    grupo: "Golfinho oceânico",
    conservacao: "Dados insuficientes",
    peso: "3-10 toneladas",
    tamanho: "5-9 metros",
    alimentacao: "Peixes, focas, aves marinhas e outros cetáceos",
    distribuicao: "Todos os oceanos",
    curiosidade: "Apesar de ser chamada de baleia-assassina, a orca é na verdade a maior espécie de golfinho do mundo.",
    transform: 'translateX(-50%)',
  },
  cachalote: {
    nome: "Cachalote",
    cientifico: "Physeter macrocephalus",
    grupo: "Baleia dentada",
    conservacao: "Vulnerável",
    peso: "25-57 toneladas",
    tamanho: "11-20 metros",
    alimentacao: "Lulas gigantes, peixes e polvos",
    distribuicao: "Oceanos profundos de todo o mundo",
    curiosidade: "É o mamífero que realiza alguns dos mergulhos mais profundos do planeta, ultrapassando 2.000 metros.",
    transform: 'translateX(-45%)',
  },
  beluga: {
    nome: "Beluga",
    cientifico: "Delphinapterus leucas",
    grupo: "Baleia dentada",
    conservacao: "Pouco preocupante",
    peso: "0,7-1,6 toneladas",
    tamanho: "3-5,5 metros",
    alimentacao: "Peixes, crustáceos e moluscos",
    distribuicao: "Regiões árticas e subárticas",
    curiosidade: "Conhecida como 'canário-do-mar' devido à grande variedade de sons que consegue produzir.",
    transform: 'translateX(-50%) translateY(-6%)',
  },
};

// detecta se é mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// calcula o offset correto dependendo do dispositivo
function calcularOffset(indice) {
    if (isMobile()) {
        return -indice * 100; // 100vw por article no mobile
    } else {
        return 30 - indice * 40; // 40vw por article no desktop
    }
}

// aplica o transform no carrossel
function moverCarrossel(indice) {
    carousel.style.transform = 'translateX(' + calcularOffset(indice) + 'vw)';
}

articles[0].classList.add('destaque');

articles.forEach(function(article, index) {
    article.addEventListener('click', function() {
        modalNome.textContent = especies[article.dataset.species].nome;
        modalCientifico.textContent = especies[article.dataset.species].cientifico;
        modalGrupo.textContent = especies[article.dataset.species].grupo;
        modalConservacao.textContent = especies[article.dataset.species].conservacao;
        modalPeso.textContent = especies[article.dataset.species].peso;
        modalTamanho.textContent = especies[article.dataset.species].tamanho;
        modalAlimentacao.textContent = especies[article.dataset.species].alimentacao;
        modalDistribuicao.textContent = especies[article.dataset.species].distribuicao;
        modalCuriosidade.textContent = especies[article.dataset.species].curiosidade;
        modalImage.src = 'assets/images/' + article.dataset.species + '.png';
        modalImage.style.transform = isMobile() ? 'translateX(-50%)' : especies[article.dataset.species].transform;
        articles[indiceAtual].classList.remove('destaque');
        indiceAtual = index;
        articles[indiceAtual].classList.add('destaque');
        moverCarrossel(indiceAtual);
        modal.style.display = 'flex';
    });
});

moverCarrossel(0);

btnNext.addEventListener('click', function() {
    if (indiceAtual < articles.length - 1) {
        articles[indiceAtual].classList.remove('destaque');
        ++indiceAtual;
        articles[indiceAtual].classList.add('destaque');
        moverCarrossel(indiceAtual);
    }
});

btnPrev.addEventListener('click', function() {
    if (indiceAtual > 0) {
        articles[indiceAtual].classList.remove('destaque');
        --indiceAtual;
        articles[indiceAtual].classList.add('destaque');
        moverCarrossel(indiceAtual);
    }
});

modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
});

hamburguer.addEventListener('click', function() {
    navMenu.classList.toggle('aberto');
});

btnExplore.addEventListener('click', function() {
    for (let i = 0; i < 8; i++) {
        let gota = document.createElement('div');
        let tamanho = Math.random() * 22 + 8;
        let x = (Math.random() - 0.5) * 200;
        let y = (Math.random() - 0.5) * 200;
        gota.style.cssText = `
            position: fixed;
            width: ${tamanho}px;
            height: ${tamanho}px;
            border-radius: 50%;
            background-color: var(--ocean-light);
            top: calc(50% + ${y}px);
            left: calc(50% + ${x}px);
            opacity: 0.8;
            pointer-events: none;
            animation: splash ${0.6 + Math.random() * 0.4}s ease-out forwards;
        `;
        document.body.appendChild(gota);
        setTimeout(function() {
            gota.remove();
        }, 1200);
    }
    splash.classList.add('ativo');
    setTimeout(function() {
        splash.classList.remove('ativo');
    }, 1600);
    document.querySelector('#species').scrollIntoView({ behavior: 'smooth' });
});

// recalcula posição se a janela for redimensionada
window.addEventListener('resize', function() {
    moverCarrossel(indiceAtual);
});