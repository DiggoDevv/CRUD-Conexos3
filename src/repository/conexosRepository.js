//onde vai trabalhar com o modelo
// import Order from "../model/orderModel.js";

// class ConexosRepository{
//     async create(conexosData){
//     return await Order.create(conexosData);
//     }
    
//     async getAll(){
//         return await Order.findAll();
//     }

//     async getById(id){
//         return await Order.findByPk(id);
//     }
//     async update(id, conexosData) {
//         return await Order.update(conexosData, 
//             { 
//                 returning: true,
//                 where: {id: id}
//             });
//     }

//     async delete(id) {
//         return await Order.destroy({
//             where: {
//                 id: id,
//             },
//         });
//     }
// }

// export default new ConexosRepository