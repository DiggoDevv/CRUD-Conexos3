//responsavel pela comunicação entre a camada view/front-end/postman e model
import conexosRepository from "../repository/conexosRepository";

class ConexosController{
    async create(req, res){
        try {
            const conexos = await conexosRepository.create(req.body);
            res.status(201).json(conexos);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getAll(req, res){
        try {
            const conexos = await conexosRepository.getAll();
            res.json(conexos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } 

    async getById(req, res){
        try {
            const conexos = await conexosRepository.getById(res.params.id);
           // != se negação for true = n existe id buscado
           // != se negação for false = existe id buscado
            if (!conexos) {
                return res.status(404).json({ error: "Cliente não encontrado" });       
                //caso estivesse sem o return ia executar as duas linhas de codigo fazendo duas respostas para uma requisição
                //return serve para encerrar o processamento do metodo
            }
            res.json(conexos);

        } catch (error) {
            res.status(500).json({ erro: error.message });
            
        }
    }

    async update(req, res){
        try {
            //affectedRows = linhas afetadas/atualizadas
            const [affectedRows, conexos] = await conexosRepository.update(req.params.id, req.body);
            if (!conexos) {
                return res.status(404).json({ error: "Cliente não encontrado" });       
            }  

            if(affectedRows === 0){
                return res.status(500).json({
                    error: `Não foi possivel atualizar o formulario com id: ${req.params.id}`,
                })
            };

        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
       
    }
    async delete(req, res){
        try{
            const destroyedRows = await conexosRepository.delete(req.params.id);
            if (destroyedRows === 0) {
                return res.status(500).json({ error: `Não foi possivel excluir o cliente com id: ${req.params.id}`,
                });       
            }
            res.json({ message: "Cliente excluido com sucesso"});
        } catch(error){
            res.status(500).json({ error: error.message })
        }
    }   
}

export default new ConexosController();