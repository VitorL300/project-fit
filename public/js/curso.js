// Selecionando os elementos pelo ID
const menuBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

// Verificando se os elementos foram encontrados (olhe no Console do navegador F12)
if (!menuBtn || !sidebar || !mainContent) {
    console.error("Erro: Um dos elementos não foi encontrado no HTML. Verifique os IDs.");
} else {
    // Adicionando o evento de clique
    menuBtn.addEventListener('click', () => {
        console.log("Botão clicado!"); // Teste para ver se o clique funciona
        
        // Adiciona/Remove a classe que esconde a sidebar
        sidebar.classList.toggle('closed');
        
        // Ajusta a margem do conteúdo principal
        //mainContent.classList.toggle('expanded'); //Deixar assim, comentado
    });
}

// --- Lógica dos Dropdowns (Canais/Links) ---
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        const arrow = this.querySelector(".arrow");
        
        if (submenu) {
            submenu.classList.toggle("submenu-open");
            arrow.classList.toggle("rotate");
        }
    });
});

// 1. Seleciona o Player Principal e a Lista
const mainVideo = document.querySelector('.main-content video');
const playlistItems = document.querySelectorAll('.video-item');

// 2. Adiciona o evento de clique em cada item da lista
playlistItems.forEach((item) => {
    item.addEventListener('click', function() {
        
        // A. Pega os dados guardados no HTML (data-video e data-poster)
        const videoSource = this.getAttribute('data-video');
        const posterSource = this.getAttribute('data-poster');

        // B. Atualiza o Player Principal
        mainVideo.src = videoSource;
        mainVideo.poster = posterSource;
        
        // C. Toca o vídeo automaticamente
        mainVideo.play();

        // D. Atualiza o estilo visual (muda a classe .active)
        // Remove 'active' de todos
        playlistItems.forEach(i => i.classList.remove('active'));
        // Adiciona 'active' só no que foi clicado
        this.classList.add('active');
    });
});