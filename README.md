
# 👩🏾‍💻 teste-dti 👩🏾‍💻

⁉️ Repositório criado para o teste prático da empresa dti digital. A aplicação trata-se de uma ferramenta de lembretes, onde é possível criar, visualizar, deletar, editar e filtrá-los.

---

## 💡premissas
- Não é necessário realizar login na plataforma
- O usuário só tenta apagar lembretes já existentes

---

## 🤔 decisões de projeto
- Plataforma responsiva
- Backend desenvolvido em NodeJS
- Frontend desenvolvido em ReactJS + CSS
- Utilização de mysql2 para o banco de dados
- Utilização do docker
- Criação de middleware para validar os dados enviados por meio do formulário Backend
- Calendário só permite escolha de datas a partir do D+1 para impedir a inserção de datas fora do periodo especificado

---

## 📝instruções de execução
1. Clonar o repositório por meio de  

``` $ git clone https://github.com/vitoriabispo/rackers_test_lembretes.git ``` 

2. Dentro da pasta do repositório, executar o comando abaixo:

``` $ yarn install ``` 

3. Criação de um arquivo .env (exemplo abaixo):

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
---

## 🎨 protótipo desenvolvido
🔗 Link para Figma: https://www.figma.com/file/s3w7Lr4MizdYX9y1S1Yjd2/teste-lembretes?type=design&node-id=0%3A1&mode=design&t=lNyGrX4hcQeTRYbb-1