import Employee from "../model/employeeModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const TOKEN_KEY = process.env.TOKEN_KEY
class EmployeeController {
    async login(req, res) {
        try {
            const { codigoAcesso, password } = req.body;
            const employee = await Employee.findOne({
                where: { codigoAcesso: codigoAcesso }
            });

            if (employee && (await bcrypt.compare(password, employee.password))) {
                
                const token = jwt.sign(
                    { employeeId: employee.id },
                     TOKEN_KEY,
                    // process.env.TOKEN_KEY,
                    {
                        expiresIn: "5h",
                    }
                );
                return res.status(200).json({ token: token });
            }

            res.status(400).json({ error: "Credenciais inválidas." });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const { /*nome,*/ codigoAcesso, password } = req.body;
            const saltRounds = 10;
            const encryptedUserPassword = await bcrypt.hash(password, saltRounds);

            const newEmployee = await Employee.create({
               // nome,
                codigoAcesso,
                password: encryptedUserPassword
            });

            const token = jwt.sign(
                { employeeId: newEmployee.id, codigoAcesso },
                TOKEN_KEY,
                { expiresIn: "5h" }
            );

            res.status(201).json({ newEmployee, token, message: "Funcionário criado!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Erro ao criar funcionário" });
        }
    }
    async getall (req, res) {
        try {
            const getAllUser = await User.findAll();
            if (getAllUser === 0) return res.json({
                messege: 'Não há usuários cadastrado'
            })
            res.status(200).json(getAllUser);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro interno' });
        }
    }

    async getById (req, res) {
        try {
            const id = req.params.id;
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({
                    messege: 'Não há usuários cadastrado'
                });
            }
            res.status(200).json(user);
        } catch (error) {
            console.log(error)
            res.status(500).json({ messege: 'Erro interno' });
        }
    }
}

export default new EmployeeController();
