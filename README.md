<h1 align="center">
  <img alt="brq" height="300" title="brq" src="logo.png" />
</h1>

<p align="center">Processo Seletivo BRQ.</p>

<p align="center">Projeto: Encurtador de URL.</p>

<p align="center">
 <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
 <a href="#computer-instalação-execução-e-desenvolvimento">Instalação, execução e desenvolvimento</a>
</p>
            
## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [VSCode](https://code.visualstudio.com/)(IDE de Desenvolvimento)
- [Insomnia](https://insomnia.rest/)(Testes de API Restful)
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://github.com/expressjs/express)
- [Nodemon](https://nodemon.io/) (Reload automatico do servidor)
- [Yup](https://github.com/jquense/yup) (Validacoes de entrada)
- [PostgreSQL](https://www.postgresql.org/) (Banco de Dados) 
- [Sequelize](https://sequelize.org/) (ORM mapeamento do banco de dados)
- [Jest](https://jestjs.io/) (Testes unitarios)

## :computer: Instalação, execução e desenvolvimento

Faça um clone desse repositório.

### Backend

- A partir da raiz do projeto, entre na pasta rodando `cd backend/`;
- Rode `yarn` para instalar sua dependências;
- Alterar o arquivo `.env` com SUAS variáveis ambiente;
- Rode `yarn sequelize db:migrate` para executar as migrations;
- Para executar a migration de `admin-user` rode o comando `yarn sequelize db:seed:all`
- Importe o arquivo `Insomnia.json` desse repositório no Insomnia;
- Rode `yarn dev` para iniciar o servidor.

---

Desenvolvido por [Raphael Souza Prado](https://www.linkedin.com/in/raphaelpradooliveira/)
