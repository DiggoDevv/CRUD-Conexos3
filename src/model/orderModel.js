//cria o modelo do banco de dados
import {Sequelize} from "sequelize";
import sequelize from "../config/db.js";

const Order = sequelize.define("orders", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type:Sequelize.STRING(100),
        allowNull: false,
    },
    cpf: {
        type:Sequelize.STRING(15),
        allowNull: false,
        unique:true
    },
    telefone:{
        type:Sequelize.STRING(20),
        allowNull: false,
    },
    email:{
        type:Sequelize.STRING(100),
        allowNull: false,
    },
    plano:{
        type:Sequelize.STRING(30),
        allowNull: false,
    },
    horario:{
        type:Sequelize.STRING(30),
        allowNull: false,
    },
    status:{
        type:Sequelize.STRING(50),
        allowNull: false,
    }
});
console.log(Order.nome)

//criar uma função que converter string para date
// quando receber uma requisição de criação de uma order

//consumir api FRONT, acessar api, retornar os dados e salvar
//usar o axxos no front para fazer requisicoes para api e obter e salvar as respostas
// usar em vendas
export default Order;