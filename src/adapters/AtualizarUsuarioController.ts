import UseCase from "../core/shared/UseCase";
import { Express } from "express";
import AtualizarUsuario from "../core/usuario/service/AtualizarUsuario";

export default class AtualizarUsuarioController{
    constructor(
        private readonly server:Express,
        private readonly useCase:AtualizarUsuario
    ){
        server.put('/usuarios',(req,res)=>{
            let {id} = req.body;
            this.useCase.executar(id)
        })
    }
}