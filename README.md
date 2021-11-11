<p align="center">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--FUjuPIs8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/452qob0efqpz249wrvnm.png" alt="restLogo" width="85" height="85"><img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1-1174935.png" alt="nodeLogo" width="85" height="85"><img src="https://ps.w.org/jwt-auth/assets/icon-256x256.png?rev=2298869" alt="css3Logo" width="85" height="85">
</p>
<br>

# API REST - Equipe 31SI | IAE, Bora? (versão 1.0)

## Sobre o Projeto
Projeto dos 3º e 4º períodos das turmas de Sistemas para Internet, FICR 2021.2

## Objetivo
Oferecer um produto digital que canalize de forma rápida, fácil e em qualquer momento do dia, a ocorrência dos eventos culturais próximos que sejam realizados na cidade do Recife. Assim, os usuários serão informados dos atos, celebrações e festejos da cidade, sem necessariamente estarem conectados em tempo integral aos veículos de comunicação. 

## Deploy da Aplicação com Heroku:
https://iae-bora.herokuapp.com/

## Para rodar o projeto
- Clone esse repositório
- Faça **npm install** em seu terminal para instalar as dependências.

    ~~~Shell
        npm install
    ~~~

- Para rodar o servidor em ambiente de desenvolvimento, digite **npm run dev** no terminal:

    ~~~Shell
        npm run dev
    ~~~

- Ou se preferir, apenas **npm start**:
    ~~~Shell
        npm start
    ~~~

## Status
🚧 Em construção... 🚧

## Rotas
### Apresentação da API

**GET:** /

Apresenta o título da API e sua versão.

Resposta [200]:

~~~Javascript
{
    "titulo": "IAE, bora?",
    "versao": "1.0.0"
}
~~~

### Administrador

**POST:** admin/register

Criar novo usuário administrador. Ele que terá acesso a determinadas rotas.

Body necessário:

~~~Javascript
{
    "name": "string",
    "email": "string",
    "password": "string"
}
~~~

Resposta [201]:

~~~Javascript
{
    Usuário criado com sucesso.
}
~~~

Resposta [400] quando o usuário administrador insere o e-mail igual a um já cadastrado:

~~~Javascript
{
    "error": [
        "Já existe uma conta com esse e-mail."
    ]
}
~~~

Resposta [400] quando o usuário administrador cria uma senha com menos de 8 caracteres:

~~~Javascript
{
    "errors": [
        "A senha precisa ter no mínimo 8 caracteres."
    ]
}
~~~

**GET:** /admin

Lista todos os usuários administradores.

Resposta [200]:

~~~Javascript
[
    {
        "_id": "object ID",
        "name": "string",
        "email": "string",
        "password": "string"
    }
]
~~~

**DELETE:** /:id

Deletar um administrador a partir do seu ID. É necessário autorização com token no padrão: Bearer Token.

Resposta [200]:

~~~Javascript
{
    "message": "Administrador deletado com sucesso."
}
~~~

Resposta [401]:

~~~Javascript
{
    "error": "Token não fornecido."
}
~~~

### Login
Fazer login na API para gerar o JSON Web Token que será enviado em todas as requisições protegidas que apenas o usuário administrador terá acesso.

**POST:** /login/admin

Body necessário:

~~~Javascript
{
    "email": "string",
    "password": "string"
}
~~~

Resposta [200]:

~~~Javascript
{
    "admin": {
        "id": "object ID",
        "email": "string"
    },
    "token": "string"
}
~~~

Resposta [401]:

~~~Javascript
{
    "error": "Administrador não encontrado."
}
~~~

Resposta [401]:

~~~Javascript
{
    "error": "Senha não corresponde."
}
~~~

### Eventos

**GET:** /events

Listar todos os eventos em ordem alfabética.

Resposta [200]:

~~~Javascript
[
     {
        "_id": "object ID",
        "title": "string",
        "date": "string",
        "description": "string",
        "hour": "string",
        "local": {
            "address": "string",
            "district": "string",
            "city": "string",
            "state": "string",
            "postcode": "string"
        },
        "price": "string"
    }
]
~~~

**GET:** /title

Lista o evento pelo nome.

Params necessário:

| Key | Value |
| ---- | ---- |
| title | Título do evento |

Resposta [200]:

~~~Javascript
[
     {
        "_id": "object ID",
        "title": "string",
        "date": "string",
        "description": "string",
        "hour": "string",
        "local": {
            "address": "string",
            "district": "string",
            "city": "string",
            "state": "string",
            "postcode": "string"
        },
        "price": "string"
    }
]
~~~

**POST:** /register

Cadastrar evento. É necessário autorização com token no padrão: Bearer Token.

Body necessário:

~~~Javascript
{
    "title": "string",
    "date": "string",
    "description": "string",
    "hour": "string",
    "local": {
        "address": "string",
        "district": "string",
        "city": "string",
        "state": "string",
        "postcode": "string"
    },
    "price": "string"
}
~~~

Resposta [201]:

~~~Javascript
{
    "_id": "object ID",
    "title": "string",
    "date": "string",
    "description": "string",
    "hour": "string",
    "local": {
        "address": "string",
        "district": "string",
        "city": "string",
        "state": "string",
        "postcode": "string"
    },
    "price": "string"
}
~~~

Resposta [400]:

~~~Javascript
{
    "error": [
        "Já existe esse evento cadastrado."
    ]
}
~~~

Resposta [401]:

~~~Javascript
{
    "error": "Token não fornecido."
}
~~~

**GET:** /events/{id}

Visualizar evento pelo seu ID.

Resposta [200]:

Evento com o ID informado.

~~~Javascript
{
    "_id": "object ID",
    "title": "string",
    "date": "string",
    "description": "string",
    "hour": "string",
    "local": {
        "address": "string",
        "district": "string",
        "city": "string",
        "state": "string",
        "postcode": "string"
    },
    "price": "string"
}
~~~

Resposta [400]:

Quando o ID informado está incorreto.

~~~Javascript
{
    "message": "O ID especificado não é válido."
}
~~~

**DELETE:** events/{id}

Deletar um evento a partir do seu ID. É necessário autorização com token no padrão: Bearer Token.

Resposta [200]:

~~~Javascript
{
    "message": "Evento deletado com sucesso."
}
~~~

Resposta [401]:

~~~Javascript
{
    "error": "Token não fornecido."
}
~~~

## Regras de negócio

- Não pode existir usuários iguais.
- Apenas o usuário administrador poderá cadastrar e deletar eventos.

## Tecnologias

Foram utilizadas no desenvolvimento do projeto as seguintes tecnologias:

- Git e Github;
- Visual Studio Code;
- Node.js;
- Express.js;
- Nodemon;
- MongoDB;
- Mongoose;
- Cors;
- Bcrypt;
- Yup;
- Jsonwebtoken.

Obs.: O Nodemon está como dependência de desenvolvimento.

## Melhorias futuras

Este projeto encontra-se em desenvolvimento e está aberto para pull request.

### Equipe
---
Feito com ❤️ pela Equipe 31 👋🏽 Entre em contato:

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/irlaandrade/"><img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/64447281?s=460&u=6a22a8671f8940a5b037a355288ba6f89f068435&v=4" width="100px;" alt=""/><br /><sub><b>Irla Andrade</b></sub></a><br /></td>
    <td align="center"><a href="https://www.linkedin.com/in/gedsonmonteiro/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/72584422?v=4" width="100px;" alt=""/><br /><sub><b>Gedson Monteiro</b></sub></a><br /></td>
    <td align="center"><a href="https://www.linkedin.com/in/melissa-assis-656b021b4/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/71049513?v=4" width="100px;" alt=""/><br /><sub><b>Melissa Assis</b></sub></a><br /></td>
    <td align="center"><a href="https://www.linkedin.com/in/italo-ramos-07b8a2203/"><img style="border-radius: 50%;" src="" width="100px;" alt=""/><br /><sub><b>Italo Ramos</b></sub></a><br /></td>
    <td align="center"><a href=""><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/91993348?v=4" width="100px;" alt=""/><br /><sub><b>Gleyson Lacerda</b></sub></a><br /></td>
    <td align="center"><a href="https://www.linkedin.com/in/rayssa-cunha-170a1215b/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/66392257?v=4" width="100px;" alt=""/><br /><sub><b>Rayssa Cunha</b></sub></a><br /></td>
    
  </tr>
</table>
