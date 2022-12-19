## NODE EXPRESS TS TEMPLATE

## Qual a função desse Repositório ?

1. Esse repositório é um template de API com NodeJs, Express e Jest para a conclusão do terceiro módulo da Arnia.

## Sumário

[Tecnologias](#tecnologias)

[Como instalar](#como-instalar)

[Como utilizar](#como-utilizar)

[Diretorios](#diretorios)

[Projeto](#projeto)

## Tecnologias

1. NodeJs

2. Mongo (Mongoose)

3. Jest (Unitários e Integração)

4. Supertest (Integração)

5. Express

6. Typescript

7. Babel

## Como instalar

1. npm i

## Como utilizar

1. Deverá ser adicionada a string de conexão com o MongoDB no arquivo "src/credentials-teste.ts", e renomear o arquivo para "credentials.ts"

2. npm run start para inicializar a API

3. npm run seed para popular o banco de dados

4. npm run test para rodar os testes

5. npm run coverage para rodar um teste de cobertura

6. As rotas poderão ser acessadas através do Postman, com a documentação salva no seguinte endereço:
   https://api.postman.com/collections/21848380-7503fbfb-5e2c-4c47-9d10-6f76a2bb4e51?access_key=PMAT-01GMKTEMF6365TANRV80KWCB4W

## Diretorios

1. mocks - Mocks para uso de testes na biblioteca Jest

2. models - Camada de Modelos de Schemas feitos pelo Moongose

3. repositories - Camada de interação com o banco de dados

4. services - Camada com a lógica de serviço/regras de negócio

5. controllers - Camada de interação com requests e responses com o front-end

6. routes - Camada com as rotas da aplicação

7. utils - Encontram-se validadores de erros e outras utilidades comuns a diferentes camadas e/ou entidades

8. factories - Onde se é realizado o instanciamento das camadas para uso da aplicação

## Projeto

1. O projeto simula uma aplicação de controle de resenhas de livros e os livros citados.

2. É composta de duas entidades: books (livros) e reviews (resenhas).
