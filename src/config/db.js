//faz a configuração do banco de dados
import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPass = process.env.DB_PASS;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: "mysql",
    host : dbHost,
});

export default sequelize;