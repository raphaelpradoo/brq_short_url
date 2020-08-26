<h1 align="center">
  <img alt="brq" height="300" title="brq" src="logo.png" />
</h1>

<p align="center">
  Processo Seletivo da empresa BRQ.
</p>

### Projeto: Encurtador de URL
          
## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [VSCode](https://code.visualstudio.com/) (IDE de Desenvolvimento)
- [Insomnia](https://insomnia.rest/) (Testes de API Restful)
- [Yarn](https://yarnpkg.com/) (Gerenciador de pacotes para JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://github.com/expressjs/express)
- [Nodemon](https://nodemon.io/) (Reinicia automaticamente o servidor após alterações nos arquivos)
- [Yup](https://github.com/jquense/yup) (Validação dos dados de entrada)
- [PostgreSQL](https://www.postgresql.org/) (Banco de Dados) 
- [Sequelize](https://sequelize.org/) (Mapeamento do Banco de Dados)
- [Jest](https://jestjs.io/) (Testes unitários)

## :computer: Instalação e execução 

### Container

Criar o seguinte container no Docker com o comando: 

`docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

### Banco de Dados

Abrir a seguinte conexão no Postbird:
- Lost: localhost
- Port: 5432
- Username: postgres
- Password: docker

Criar um banco chamado `brq`

### Git

Clonar este repositório.

### Backend

- A partir da raiz do projeto, entre na pasta rodando `cd backend/`;
- Rode `yarn` para instalar todas as dependências;
- Rode `yarn sequelize db:migrate` para executar as migrations;
- Importe o arquivo `Insomnia.json` desse repositório no Insomnia;
- Rode `yarn dev` para iniciar o servidor.

### Testes

- A partir da raiz do projeto, entre na pasta rodando `cd backend/`;
- Rode `yarn test` para executar os testes criados.

---

Desenvolvido por [Raphael Souza Prado](https://www.linkedin.com/in/raphaelpradooliveira/)
