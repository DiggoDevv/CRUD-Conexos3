import Order from "../model/orderModel";

class conexosRepository{
    async create(conexosData){
    return await Order.create(conexosData);
    }
    
    async getAll(){
        return await Order.findAll();
    }

    async getById(id){
        return await Order.findByPk(id);
    }

    async update(id, conexosData) {
        return await Order.update(conexosData, { where: {id: id}});
    //update recebe automobileData e recebe o objeto que vai ser usado para atualizar
    //ou seja vai buscar o usuario com esse id e atualizar ele no automobileData
    }
    async
}