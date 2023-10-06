//fazemos a inicialização daquilo que prcisamos para nossa api funcionar
//no caso o banco de dados e a aplicação
import app from "./app.js"
import db from "./config/db.js"
import dotenv from "dotenv"

dotenv.config();

//caso a porta não exista vai passar por padrão 3000
const PORT = process.env.PORT || 3000;

try {
    //sync vai garantir que o que esta dentro do nosso model vai estar na nossa tabela do banco de dados
    //tambem testa conexao com banco de dados para ver se deu tudo certo
    //não é bom para ambientes de produção, para eles usasse o migrations
    await db.sync({ alter: false })
    // colocar como true se for alterar o model, false quando rodar sem alterar
    console.log("A conexão com o banco de dados foi bem sucedida!");

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT} `)
    })

} catch (error) {
    console.error("Não foi possivel iniciar o servidor: ", error);
    process.exit(1);
}