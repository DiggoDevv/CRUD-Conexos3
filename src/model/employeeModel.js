// models/employeeModel.js
import { Sequelize } from 'sequelize';
import sequelize from "../config/db.js";

const Employee = sequelize.define("employee", {
    ID: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    // nome: {
    //     type: Sequelize.STRING(100),
    //     allowNull: false,
    // },
    codigoAcesso: {
        type: Sequelize.STRING(160),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING(160),
        allowNull: false,
    },
});

Employee.sync()
    .then(() => {
        console.log("Tabela 'employee' criada com sucesso.");
    })
    .catch((error) => {
        console.error("Erro ao criar a tabela 'employee':", error);
    });

export default Employee;
