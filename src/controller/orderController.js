//responsavel pela comunicação entre a camada view/front-end/postman e model
import Order from "../model/orderModel.js";
// import conexosRepository from "../repository/conexosRepository.js";
// import employeeRepository from "../repository/employeeRepository.js"
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

class OrderController{
    async create(req, res){
        try {
            const{nome, cpf, telefone, email, plano, horario, status} = req.body;
            const newOrder = await Order.create({
                nome,
                cpf,
                telefone,
                email,
                plano,
                horario,
                status
            });
            res.status(201).json({newOrder, message: "Cliente criado!"});
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "erro ao criar cliente"});
        }
    }

    async getAll(req, res){
        try {
            const getAllOrder = await Order.findAll();
            if (getAllOrder === 0) return res.json({messege:'Não há pedidos'})
            res.status(200).json(getAllOrder);
        } catch (error) {
            console.log(error)
            res.status(500).json({messege: 'Erro ao procurar pedido' });
        }
    } 

    async getById(req, res){
        try {
            const id = req.params.id;

            const order = await Order.findByPk(id);
           // != se negação for true = n existe id buscado
           // != se negação for false = existe id buscado
            if (!order) {
                return res.status(404).json({ error: "Cliente não encontrado" });       
                //caso estivesse sem o return ia executar as duas linhas de codigo fazendo duas respostas para uma requisição
                //return serve para encerrar o processamento do metodo
            }
            res.json(order).status(200);

        } catch (error) {
            res.status(500).json({ erro: error.message });
            
        }
    }

    async update(req, res){
        try {
            const{id}=req.params;
            const{nome, cpf, telefone, email, plano, horario, status} = req.body;
            const[updateOrder]= await Order.update({
                nome, cpf, telefone, email, plano, horario, status }, {
                    where:{id}
                });
            if (updateOrder === 0) return res.status(404).json({messege: 'Pedido não encontrado'});
            res.json("Pedido atualizado com sucesso!");
            // if (!updateOrder) {
            //     return res.status(404).json({ error: "Cliente não encontrado" });       
            // }  
            // if(affectedRows === 0){
            //     return res.status(500).json({
            //         error: `Não foi possivel atualizar o formulario com id: ${req.params.id}`,
            //     })

        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
       
    }
    async delete(req, res){
        try{
            const{id}= req.params;
            const deleteOrder = await Order.destroy({ where: {id}
            });
            if (deleteOrder === 0) {
                return res.status(500).json({ error: `Não foi possivel excluir o cliente com id: ${req.params.id}`,
                });       
            }
            res.json({ message: "Cliente excluido com sucesso"});
        } catch(error){
            res.status(500).json({ error: error.message })
        }
    }
}

export default new OrderController();