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