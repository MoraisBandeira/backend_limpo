import { Express } from "express";
import ConsultarUsuario from "../core/usuario/service/ConsultarUsuarios";

export default class ConsultarUsuariosController{
    constructor(
        readonly server: Express,
        readonly useCase:ConsultarUsuario
        ){
            server.get('/usuarios',async ()=>{ 
               return  await useCase.executar()
               
            })
        }
}