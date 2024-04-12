import { PrismaClient } from "@prisma/client";
import IUsuario from "../../core/usuario/model/Usuario";
import RepositoryUsuario from "../../core/usuario/model/RepositorioUsuario";

export default class RepositorioUsuarioPrisma implements RepositoryUsuario{
    private prisma:PrismaClient
    constructor(){
        this.prisma = new PrismaClient();
    }
    async buscarUsuarioId(id: number): Promise<IUsuario> {
        const user = await this.prisma.usuario.findFirst({where:{id}})
        if(user){
            return user;
        }
        throw new Error('Usuario não encontrado!')
    }
    async buscarTodos(): Promise<IUsuario[]> {
        const top = await this.prisma.usuario.findMany()
        return top
    }
    async registrar(usuario: IUsuario): Promise<IUsuario> {
        return await this.prisma.usuario.create({data:usuario})
    }
    atualizar(): Promise<IUsuario | null> {
        throw new Error("Method not implemented.");
    }
    async consultarPorEmail(email: string): Promise<IUsuario | null> {
       return await this.prisma.usuario.findFirst({where:{
        email
       }})
    }
    remover(): Promise<IUsuario | null> {
        throw new Error("Method not implemented.");
    }
    apagar(): Promise<IUsuario | null> {
        throw new Error("Method not implemented.");
    }
    
}