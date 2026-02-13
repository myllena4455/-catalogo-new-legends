function trocarAba(idAba) {
  // 1. Pega todas as seções
  const abas = document.querySelectorAll('.aba-conteudo');
  
  // 2. Esconde todas as seções removendo a classe 'active'
  abas.forEach(aba => {
    aba.classList.remove('active');
  });

  // 3. Mostra a seção que você clicou
  const abaAlvo = document.getElementById(idAba);
  abaAlvo.classList.add('active');

  // 4. (Opcional) Fecha o menu hambúrguer automaticamente no celular ao clicar
  document.getElementById('bt_menu').checked = false;
  
  // 5. Rola para o topo para garantir que o usuário veja o início da página
  window.scrollTo(0,0);
}
function copiarFicha() {
    // 1. Seleciona o elemento de texto
    const areaTexto = document.getElementById("textoFicha");
    
    // 2. Tenta usar a forma mais moderna de copiar (Clipboard API)
    if (navigator.clipboard) {
        navigator.clipboard.writeText(areaTexto.value).then(() => {
            mostrarAviso();
        });
    } else {
        // 3. Fallback para navegadores antigos/alguns celulares
        areaTexto.select();
        areaTexto.setSelectionRange(0, 99999); // Para mobile
        document.execCommand("copy");
        mostrarAviso();
    }
}

function mostrarAviso() {
    const aviso = document.getElementById("avisoCopiado");
    aviso.style.display = "block";
    
    // Esconde o aviso depois de 2 segundos
    setTimeout(() => {
        aviso.style.display = "none";
    }, 2000);
}

const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

function toggleMenu() {
    if (!sidebar) return;
    sidebar.classList.toggle('active');
}

if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
}

// 3. COPIAR FICHA (suporta Clipboard API e fallback para document.execCommand)
function copiarFicha() {
    const areaTexto = document.getElementById("textoFicha");
    if (!areaTexto) return;
    areaTexto.select();
    areaTexto.setSelectionRange(0, 99999);

    const mostrar = () => {
        const aviso = document.getElementById("avisoCopiado");
        if (aviso) {
            aviso.style.display = "block";
            setTimeout(() => { aviso.style.display = "none"; }, 2000);
        }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(areaTexto.value).then(mostrar).catch(() => {
            try { document.execCommand('copy'); mostrar(); } catch (e) { alert('Não foi possível copiar automaticamente.'); }
        });
    } else {
        try { document.execCommand('copy'); mostrar(); } catch (e) { alert('Seu navegador não suporta cópia automática. Selecione o texto e copie manualmente.'); }
    }
}

// Mapeamento de nomes de itens para arquivos de imagem (normaliza acentos/case)
document.addEventListener('DOMContentLoaded', () => {
    const normalize = s => s
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase()
        .trim();

    const mapping = {
        'a lenda de um ninja determinado': 'img/livro.jpg',
        'alto-falante ressonante de eco': 'img/alto-falante.png',
        'arco simples': 'img/Arco.png',
        'argolas de captura': 'img/Argolas-de-captura.png',
        'atirador de dardos de injecao': 'img/Atirador-de-dardos.png',
        'balista': 'img/balista.png',
        'besta (arma)': 'img/besta.png',
        'bisturi': 'img/bisturi.png',
        'braceletes de ferro': 'img/bracelete.png',
        'braco de cabo retratil': 'img/retrátil.png',
        'braco de broca': 'img/broca.png',
        'bo': 'img/bola-de-papel.png',
        'bö': 'img/bola-de-papel.png',
        'cabaca de areia': 'img/cabaca.png',
        'dako': 'img/Dako.PNG',
        'dako.': 'img/Dako.PNG',
        'dakö': 'img/Dako.PNG',
        'escopo': 'img/radio.png',
        'escudo simples': 'img/escudo.png',
        'katanas': 'img/katana normal.png',
        'benihisago': 'img/Benihisago.png',
        'bashosen': 'img/Bashosen.png',
        'bashösen': 'img/Bashosen.png',
        'gunbai': 'img/Gunbai.png',
        'kusanagi orochi': 'img/Kusanagioroshi.png',
        'bomba de fumaca': 'img/fumaça.png',
        'bombadefumaca': 'img/fumaça.png',
        'pilulas de racao militar': 'img/pilula.png',
        'pilulas de racao militar': 'img/pilula.png',
        'agua do heroi': 'img/militar.png'
        , 'bola de papeis bombas': 'img/bola-de-papel.png'
        , 'bomba de gelo': 'img/gelo.png'
        , 'bomba de luz': 'img/baner.jpg'
        , 'bomba de pimenta': 'img/pimenta.png'
        , 'brahma': 'img/fundo.png'
        , 'cachimbo de bolhas': 'img/invocação.png'
        , 'cogumelo de moldagem': 'img/cogumelo.png'
        , 'escudo retratil': 'img/retrátil.png'
        , 'kusanagi sasuke': 'img/Kusanagioroshi.png'
        , 'etiqueta de selamento': 'img/selo.png'
        , 'foice de lamina tripla (retratil)': 'img/foice3.png'
        , 'foice': 'img/foice.png'
        , 'garra': 'img/Garra.png'
        , 'guarda-chuva': 'img/Guarda.png'
        , 'himarekarei': 'img/Hiramekarei.png'
        , 'joryo': 'img/joryo.png'
        , 'kunai': 'img/kunai.png'
        , 'livro bingo': 'img/bingo.png'
        , 'mascara shinigami': 'img/mascara.png'
        , 'nunchaku': 'img/nunchako.png'
        , 'nuibari': 'img/Nuibari.png'
        , 'orelhas de gato': 'img/gato.png'
        , 'perfume da flor da lua nova': 'img/perfume.png'
        , 'pergaminhos': 'img/pergaminhos.png'
        , 'pergaminho da lua vermelha': 'img/lua vermelha.png'
        , 'pergaminho de contrato': 'img/contrato.png'
        , 'pergaminho de invocacao': 'img/invocação.png'
        , 'pomada secreta do cla hyuga': 'img/pomada.png'
        , 'pilulas de genjutsu': 'img/pilula.png'
        , 'radio': 'img/radio.png'
        , 'senbon': 'img/sebon.png'
        , 'shibuki': 'img/Shibuki.png'
        , 'shuriken': 'img/shuriken.png'
        , 'tanto': 'img/tanto.png'
        , 'tobishachimaru': 'img/Tobishachimaru.png'
        , 'veneno': 'img/veneno.png'
        , 'veneno de sasori': 'img/veneno.png'
    };

    document.querySelectorAll('.card-item').forEach(card => {
        const nomeEl = card.querySelector('.item-nome');
        const imgEl = card.querySelector('img.item-foto');
        if (!nomeEl || !imgEl) return;
        const nome = normalize(nomeEl.textContent || '');
        if (mapping[nome]) {
            imgEl.src = mapping[nome];
        }
    });
});

// Função de busca usada pelo input `searchInput`
function searchItem() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const normalize = s => s
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();

    const term = normalize(input.value || '');

    document.querySelectorAll('.card-item').forEach(card => {
        const name = card.querySelector('.item-nome') && card.querySelector('.item-nome').textContent || '';
        const desc = card.querySelector('.descricao') && card.querySelector('.descricao').textContent || '';
        const price = card.querySelector('.preco') && card.querySelector('.preco').textContent || '';
        const hay = normalize(name + ' ' + desc + ' ' + price);
        if (term === '' || hay.indexOf(term) !== -1) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// garantir que a função esteja disponível no escopo global (para onkeyup inline)
window.searchItem = searchItem;