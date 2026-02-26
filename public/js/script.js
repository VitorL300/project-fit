/* ===========================================================
   1. SELEÇÃO DE ELEMENTOS GLOBAIS
   =========================================================== */
const formRegister = document.querySelector("#form-register");
const formLogin = document.querySelector("#form-login");

// Selecionando os inputs
const emailLoginInput = document.querySelector("#email-login");
const passwordLoginInput = document.querySelector("#password-login");

const nameRegisterInput = document.querySelector("#name-register")
const emailRegisterInput = document.querySelector("#email-register");
const passwordRegisterInput = document.querySelector("#password-register");

/* ===========================================================
   2. FUNÇÕES AUXILIARES (UI/UX)
   =========================================================== */

function mostrarErro(input, mensagem) {
    input.classList.add("input-error");
    if (!input.dataset.originalPlaceholder) {
        input.dataset.originalPlaceholder = input.placeholder;
    }
    input.placeholder = mensagem;
}

function limparErro(input) {
    input.classList.remove("input-error");
    if (input.dataset.originalPlaceholder) {
        input.placeholder = input.dataset.originalPlaceholder;
    }
}

/* ===========================================================
   3. EVENTOS E LÓGICA
   =========================================================== */

// --- LÓGICA DE REGISTRO ---
if (formRegister) {
    nameRegisterInput.addEventListener("focus", () => limparErro(nameRegisterInput));
    emailRegisterInput.addEventListener("focus", () => limparErro(emailRegisterInput));
    passwordRegisterInput.addEventListener("focus", () => limparErro(passwordRegisterInput));

    formRegister.addEventListener("submit", function(event) {
        // 1. Impede o envio imediato para validar primeiro
        event.preventDefault();

        const nameValue = nameRegisterInput.value;
        const emailValue = emailRegisterInput.value;
        const passwordValue = passwordRegisterInput.value;

        let temErro = false;

        if (nameValue === "") {
            mostrarErro(nameRegisterInput, "Nome é obrigatório!");
            temErro = true;
        }

        if (emailValue === "") {
            mostrarErro(emailRegisterInput, "E-mail é obrigatório!");
            temErro = true;
        }

        if (passwordValue === "") {
            mostrarErro(passwordRegisterInput, "Senha obrigatória!");
            temErro = true;
        }

        // 2. Se tiver erro, para aqui e não envia nada
        if (temErro) {
            return; 
        }

        // 3. SE CHEGOU AQUI, ESTÁ TUDO CERTO!
        // Enviamos o formulário para o Backend (route.js) manualmente
        this.submit(); 
    });
}

// --- LÓGICA DE LOGIN ---
if (formLogin) {
    emailLoginInput.addEventListener("focus", () => limparErro(emailLoginInput));
    passwordLoginInput.addEventListener("focus", () => limparErro(passwordLoginInput));

    formLogin.addEventListener("submit", function(event) {
        // 1. Impede o envio imediato
        event.preventDefault();

        const emailValue = emailLoginInput.value;
        const passwordValue = passwordLoginInput.value;

        let temErro = false;

        if (emailValue === "") {
            mostrarErro(emailLoginInput, "E-mail é obrigatório!");
            temErro = true;
        }

        if (passwordValue === "") {
            mostrarErro(passwordLoginInput, "Senha obrigatória!");
            temErro = true;
        }

        // 2. Se tiver erro, para aqui
        if (temErro) {
            return; 
        }

        // 3. SUCESSO! ENVIANDO PARA O NODE...
        // O "this" refere-se ao formLogin. 
        // Isso vai disparar o action="/login" method="POST"
        this.submit();
    });
}