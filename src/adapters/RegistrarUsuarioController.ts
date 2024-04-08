import { Express } from "express";
import RegistrarUsuario from "../core/usuario/service/RegistrarUsuario";

export default class RegistrarUsuarioController{
    constructor(
        readonly server: Express,
        readonly useCase:RegistrarUsuario
        ){
            server.post('/usuarios',async ({body})=>{ 
                const { nome,email,senha } = body as any;
                await useCase.executar({nome,email,senha})
               
            })
        }
}