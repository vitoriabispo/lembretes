🌐 pt-br

# 👩🏾‍💻 teste-dti 👩🏾‍💻

⁉️ Repositório criado para o teste prático da empresa dti digital. A aplicação trata-se de uma ferramenta de lembretes, onde é possível criar, visualizar, deletar e filtrá-los.

## 💡premissas
- Não é necessário realizar login na plataforma
- O usuário só tenta apagar lembretes já existentes
- É possível buscar os lembretes por data (para "resetar" a busca de lembretes, basta enviar a data vazia e clicar no botão de buscar novamente)


## 🤔 decisões de projeto
- Plataforma responsiva
- Backend desenvolvido em NodeJS
- Frontend desenvolvido em ReactJS + CSS
- Utilização de mysql2 para o banco de dados
- Utilização do docker
- Criação de middleware no Backend para validar os dados enviados por meio do formulário
- Calendário só permite escolha de datas a partir do D+1 para impedir a inserção de datas fora do período especificado


## 📝instruções de execução
1. Clonar o repositório por meio de  

``` $ git clone https://github.com/vitoriabispo/teste-dti.git ``` 

2. Dentro da pasta do repositório, executar o comando abaixo:

``` $ yarn install ``` 

3. Dentro da pasta do repositório, criar um arquivo .env (exemplo abaixo):

```
HOST = localhost
USER = root
PASSWORD = root
DATABASE = reminders
PORT = 3333 
``` 

4. Criar um banco de dados com o mesmo nome inserido no .env

5. Com o repositório clonado, acessar a pasta backend e executar o comando abaixo: 

``` $ npm start ``` 

6. Em outro terminal, acessar a pasta frontend e executar o comando abaixo:  

``` $ npm start ``` 

## 🎨 protótipo desenvolvido
🔗 Link para Figma: https://www.figma.com/file/s3w7Lr4MizdYX9y1S1Yjd2/teste-lembretes?type=design&node-id=0%3A1&mode=design&t=lNyGrX4hcQeTRYbb-1

---

🌐 eng

# 👩🏾‍💻 teste-dti 👩🏾‍💻

⁉️ Repository created for the pratical test of the company dti digital. The application is a reminder tool, where it's possible to create, view, delete and filter them.

## 💡 premises
- It is not necessary to log in on the platform
- The user only tries to delete existing reminders
- It is possible to search for reminders by date (to "reset" the search, send the empty date and click on the search button again) 


## 🤔 project decisions
- Responsive platform
- Backend developed in NodeJS
- Frontend developed in ReactJS + CSS
- Use of mysql2 for the database
- Use of docker
- Creation of middleware on the Backend to validate the data sent through the form
- The calendar only allows the selection of dates after D to prevent the insertion of dates outside the specified period


## 📝 execution instructions
1. Clone the repository using:

``` $ git clone https://github.com/vitoriabispo/teste-dti.git ``` 

2. Inside the repository folder, execute:

``` $ yarn install ``` 

3. Inside the repository folder, create .env file (exemple below):

```
HOST = localhost
USER = root
PASSWORD = root
DATABASE = reminders
PORT = 3333 
``` 

4. Create a database with the same name inserted in the .env file

5. With the repository cloned, access the backend folder and execute the command below:
``` $ npm start ``` 

6. In another terminal, access the frontend folder and execute the command below:
``` $ npm start ``` 

## 🎨 developed prototype

🔗 Figma link: https://www.figma.com/file/s3w7Lr4MizdYX9y1S1Yjd2/teste-lembretes?type=design&node-id=0%3A1&mode=design&t=lNyGrX4hcQeTRYbb-1