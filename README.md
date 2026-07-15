<img width="1920" height="822" alt="fit-project-index" src="https://github.com/user-attachments/assets/84f65ac1-aa36-41a1-a53d-066209296211" />
<img width="1920" height="827" alt="fit-project-login" src="https://github.com/user-attachments/assets/3eccfd9c-8d50-4345-8726-da2ad5b494ef" />
<img width="1920" height="824" alt="fit-project-aluno" src="https://github.com/user-attachments/assets/ccced78b-e403-4a29-abb7-00e342165629" />


Tecnologias Utilizadas
Backend: Node.js, Express (Framework web rápido e minimalista).

Frontend: HTML5, CSS3 (CSS Grid, Flexbox, custom variables), JavaScript Moderno (ES6+).

Ícones: Font Awesome v6.0.0.

Tipografia: Inter Font (Google Fonts).

🔧 Como Executar o Projeto Localmente
Siga os passos abaixo para rodar a aplicação em sua máquina local:

1. Pré-requisitos
Certifique-se de ter o Node.js instalado em seu computador (Recomendado: versão LTS v20 ou superior).

2. Instalação das Dependências
Clone este repositório ou baixe os arquivos. Em seguida, abra o terminal do seu VS Code na pasta raiz do projeto (fitproject/) e execute:

Bash
npm install
3. Executando o Servidor Node.js
Para ligar o servidor Express localmente, execute o seguinte comando na raiz do projeto (onde está o arquivo server.js):

Bash
node server.js
Você verá a seguinte mensagem de confirmação no console:

Servidor rodando em http://localhost:3000/

4. Acessando a Aplicação
Abra o seu navegador web favorito e acesse a URL:
👉 http://localhost:3000/

Nota: Não utilize a extensão Live Server do VS Code (porta 5500) para navegar neste projeto, pois o Express precisa gerenciar as rotas dinâmicas de forma ativa na porta 3000.

🔗 Rotas Disponíveis na Aplicação
Rotas de Visualização (GET)
http://localhost:3000/ - Página de entrada (Landing Page).

http://localhost:3000/login - Página de Login e Registro de Conta.

http://localhost:3000/aluno - Dashboard exclusivo do Aluno Premium.

http://localhost:3000/curso-iniciante - Área do curso de Iniciantes.

http://localhost:3000/curso-forca - Área do curso de Força.

http://localhost:3000/curso-corpo - Área do curso de Corpo & Mente.

http://localhost:3000/curso-queima - Área do curso de Queima Calórica.

http://localhost:3000/curso-express - Área do curso Express 15.

Rotas de Ação (POST)
/login - Rota de validação de credenciais de acesso do usuário.

/register - Rota de criação e gravação de um novo perfil de aluno.

Desenvolvido com foco em alta performance visual e experiência de usuário fluida. 💪🐾
"""

with open('README.md', 'w', encoding='utf-8') as f:
f.write(markdown_content)

print("SUCCESS")
