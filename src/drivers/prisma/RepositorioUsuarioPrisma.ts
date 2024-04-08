import { PrismaClient } from "@prisma/client";
import RepositoryUsuario from "../../core/usuario/model/RepositorioUsuario";
import Usuario from "../../core/usuario/model/Usuario";

export default class RepositorioUsuarioPrisma implements RepositoryUsuario{
    private prisma:PrismaClient
    constructor(){
        this.prisma = new PrismaClient();
    }
    async buscarTodos(): Promise<Usuario[]> {
        console.log('ola 2')
        const top = await this.prisma.usuario.findMany()
        console.log(top)
        return top
    }
    registrar(usuario: Usuario): Promise<Usuario> {
        return this.prisma.usuario.create({data:usuario})
    }
    atualizar(): Promise<Usuario | null> {
        throw new Error("Method not implemented.");
    }
    consutarPorEmail(email: string): Promise<Usuario | null> {
       return this.prisma.usuario.findFirst({where:{
        email
       }})
    }
    remover(): Promise<Usuario | null> {
        throw new Error("Method not implemented.");
    }
    apagar(): Promise<Usuario | null> {
        throw new Error("Method not implemented.");
    }
    
}