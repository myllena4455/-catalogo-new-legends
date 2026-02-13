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
// Removido: mapeamento automático de imagens.
// Agora as imagens são determinadas pelo atributo `src` em cada <img> dentro do HTML.
// Se quiser que eu atualize algum `src` diretamente no HTML, me diga quais ou peça para aplicar as correções sugeridas (veja `index.fixed.html`).

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