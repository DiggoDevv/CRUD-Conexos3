//responsavel pela comunicação entre a camada view/front-end/postman e model
import conexosRepository from "../repository/conexosRepository";

class ConexosController{
    async create(req, res){
        try {
            const conexos = await conexosRepository.create(req.body);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getAll(req, res){
        const conexos = await conexosRepository.getAll();
        res.json(conexos);
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
        const conexos = conexosRepository.update(req.params.id, req.body);
    }
        
}

export default new ConexosController();