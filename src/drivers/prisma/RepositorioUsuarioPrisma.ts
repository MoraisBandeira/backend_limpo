import { PrismaClient } from "@prisma/client";
import RepositoryUsuario from "../../core/usuario/model/RepositorioUsuario";
import Usuario from "../../core/usuario/model/Usuario";

export default class RepositorioUsuarioPrisma implements RepositoryUsuario{
    private prisma:PrismaClient
    constructor(){
        this.prisma = new PrismaClient();
    }
    async buscarTodos(): Promise<Usuario[]> {
        const top = await this.prisma.usuario.findMany()
        return top
    }
    async registrar(usuario: Usuario): Promise<Usuario> {
        return await this.prisma.usuario.create({data:usuario})
    }
    atualizar(): Promise<Usuario | null> {
        throw new Error("Method not implemented.");
    }
    async consutarPorEmail(email: string): Promise<Usuario | null> {
       return await this.prisma.usuario.findFirst({where:{
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