import UseCase from "../../shared/UseCase";
import RepositoryUsuario from "../model/RepositorioUsuario";
import Usuario from "../model/Usuario";
type Entrada = {
    nome: string
    email: string
    senha: string
}
type Saida={
    id:number|undefined
    nome: string
    email: string
    created_at:Date|undefined
}
export default class RegistrarUsuario implements UseCase<Entrada,Saida>{
    constructor(private readonly repositorio:RepositoryUsuario){}
    async executar(input: Entrada): Promise<Saida> {
       const {nome,email,senha} = input
       const usuarioExistente = await this.repositorio.consutarPorEmail(email);
       if(usuarioExistente){
        throw new Error("usuario já existe")
       }
         const usuario = await this.repositorio.registrar({nome,email,senha})

         return {
            id:usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            created_at:usuario.created_at
         } as Saida
    }
}