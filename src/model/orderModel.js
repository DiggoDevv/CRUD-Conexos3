import {Sequelize} from "sequelize";
import db from "../config/db";

const Order = db.define("order", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
},
    nome: {
        type:Sequelize.STRING(200),
        allowNull: false,
    },
    cpf: {
        type:Sequelize.INTEGER(15),
        allowNull: false,
    },
    telefone:{
        type:Sequelize.STRING(20),
        allowNull: false,
    },
    Plano:{
        type:Sequelize.STRING(30),
        allowNull: false,
    },
    horario:{
        type:Sequelize.DATE,
        allowNull: false,
    }
});

//criar uma função que converter string para date
// quando receber uma requisição de criação de uma order

//consumir api FRONT, acessar api, retornar os dados e salvar
//usar o axxos no front para fazer requisicoes para api e obter e salvar as respostas
// usar em vendas
export default Order;