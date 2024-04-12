import RepositoryUsuario from "../core/usuario/model/RepositorioUsuario";
import { Express } from "express";
import BuscarUsuarioPorId from "../core/usuario/service/BuscarUsuarioPorId";

export default class UsuarioPorIdController{
    constructor(
        private readonly server:Express,
        private readonly useCase:BuscarUsuarioPorId
    ){
        server.get('/usuarios/:id',async (req,res)=>{ 
            const {id} = req.params
            const usuariosOrError = await useCase.executar({id:parseInt(id)})
            return res.json(usuariosOrError)
         })
    }
}

