<p align="center">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--FUjuPIs8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/452qob0efqpz249wrvnm.png" alt="restLogo" width="85" height="85">
<img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1-1174935.png" alt="nodeLogo" width="85" height="85">
<img src="https://ps.w.org/jwt-auth/assets/icon-256x256.png?rev=2298869" alt="css3Logo" width="85" height="85">
</p>

<br>

# API REST - Equipe 31SI

<br>

Projeto 3º período da turma de Sistemas para Internet, FICR 2021.2
<br><br>

## Para rodar o projeto:
1- Instalar o Node JS
```
npm Install
```
2- Executar o projeto
```
npm start
```

<br>

## Teste da API - Projeto 3o SI - 2021.2 - FICR

Acesse na <b>API Client</b> (Postman, Insomnia, Thunder, etc)

### TESTE 1 (Cadastrar os dados)  
```
http://localhost:3000/api/user/register

MÉTODO 'POST'
{
    "name" : "Fulano da Silva",
    "email" : "fulano@fulano.com",
    "password" : "123456"
}
```

Após o procedimento acima, acesse o Atlas para confirmar o cadastramento dos dados no Banco de Dados: 
em 'Databases' > Browse Collections > Collections<br><br>

```
|                 Como fazer                  |       Aviso      |
| ------------------------------------------- | -----------------|
| Digite um email com uma estrutura incorreta | Irá gerar um erro|
| Digite uma senha com menos de 6 caracteres  | Irá gerar um erro|
| Digite um email diferente (outro email)     | Irá gerar um erro|
| Digite o email e a senha do exemplo acima)  | Sem erro         |
```

<br>

### TESTE 2 (Login - Usar os dados cadastrados)
```
http://localhost:3000/api/user/login

MÉTODO 'POST'

"email" : "fulano@fulano.com
"password" : "123456"

|                 Como fazer                  |       Aviso      |
| ------------------------------------------- | -----------------|
| Digite um email sem @                       | Irá gerar um erro|
| Digite uma senha incompleta                 | Irá gerar um erro|
| Digite um email diferente                   | Irá gerar um erro|
| Digite uma senha diferente                  | Irá gerar um erro|
| Digite o email e a senha correta            | Irá gerar um erro|
```

<br>

Use <b>API Client</b> (Postman, Insomnia, Thunder, etc): 

Digite as informações (exemplo):
```
Estando como GET
- No endereço: localhost:3000/api/user/register , mude para 'POST';
- Com a informação de login em tela (body), clique em 'SEND';
- Copie o Token;

- Mude para 'GET' e vá para o endereço: localhost:3000/api/posts;
- Em 'Headers', insira 'auth-token' e cole o Token copiado na área 'Value' (ou similar).
- Clique em 'SEND'. 
```

## License
MIT
