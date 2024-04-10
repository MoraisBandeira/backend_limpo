import { Express,Response,Request } from "express";
import ConsultarUsuario from "../core/usuario/service/ConsultarUsuarios";

export default class ConsultarUsuariosController{
    constructor(
        readonly server: Express,
        readonly useCase:ConsultarUsuario,
        ){
            server.get('/usuarios',async (req,res)=>{ 
               const usuariosOrError = await useCase.executar()
               return res.json(usuariosOrError)
            })
        }
}