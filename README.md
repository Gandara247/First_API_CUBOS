![BarraGit](https://github.com/Gandara247/gandara247/assets/120376565/00602970-43b6-4555-b548-00e87c512ad4)
# First_API_CUBOS_ACADEMY

# Documentação do Projeto
## Objetivo
O objetivo deste projeto é fornecer uma API para gerenciar instrutores e aulas de uma escola de programação.

## Tecnologias
- Node.js v14.17.0
- npm v7.15.1

## Estrutura do Projeto
O projeto está organizado da seguinte forma:

```
projeto/
├── controller/
│   ├── InstrutoresController.js
│   └── aulasController.js
├── routes/
│   └── routes.js
└── index.js
```

- `controller/`: contém os controladores para as rotas da API.
- `routes/`: contém o arquivo de rotas da API.
- `index.js`: arquivo principal que inicia o servidor.

## Rotas
### Instrutores
- `GET /instrutores`: retorna todos os instrutores cadastrados.
- `GET /instrutores/:id`: retorna o instrutor com o ID especificado.
- `POST /instrutores`: adiciona um novo instrutor.
- `PUT /instrutores/:id`: atualiza o instrutor com o ID especificado.
- `PATCH /instrutores/:id/status`: atualiza o status do instrutor com o ID especificado.
- `DELETE /instrutores/:id`: remove o instrutor com o ID especificado.

### Aulas
- `POST /instrutores/:idinstrutor/aulas`: adiciona uma nova aula para o instrutor com o ID especificado.
- `GET /aulas`: retorna todas as aulas cadastradas.
- `GET /aulas/:id`: retorna a aula com o ID especificado.
- `GET /instrutores/:idinstrutor/aulas`: retorna todas as aulas do instrutor com o ID especificado.

### Exemplos
#### GET /instrutores

```js
GET /instrutores

[
  {
    "id": 1,
    "nome": "João",
    "idade": 30,
    "sexo": "M",
    "especialidade": "JavaScript",
    "status": "ativo"
  },
  {
    "id": 2,
    "nome": "Maria",
    "idade": 25,
    "sexo": "F",
    "especialidade": "Python",
    "status": "inativo"
  }
]
```

#### POST /instrutores

```js
POST /instrutores

{
  "nome": "José",
  "idade": 35,
  "sexo": "M",
  "especialidade": "Java"
}
```

#### PUT /instrutores/:id

```js
PUT /instrutores/1

{
  "nome": "João Silva",
  "idade": 30,
  "sexo": "M",
  "especialidade": "JavaScript"
}
```

## Executando o Projeto
Para executar o projeto localmente, siga os seguintes passos:

1. Instale o Node.js e o npm.
2. Clone o repositório do projeto.
3. Instale as dependências do projeto com o comando `npm install`.
4. Inicie o servidor com o comando `npm start`.
5. Acesse a API em `http://localhost:3000`.
