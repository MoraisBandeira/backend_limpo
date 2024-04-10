import UseCase from "../../shared/UseCase";
import RepositoryUsuario from "../model/RepositorioUsuario";
import Usuario from "../model/Usuario";
type Entrada = {
    nome: string
    email: string
    senha: string
}

export default class RegistrarUsuario implements UseCase<Entrada,Usuario>{
    constructor(private readonly repositorio:RepositoryUsuario){}
    async executar(input: Entrada): Promise<Usuario> {
       const {nome,email,senha} = input
       const usuarioExistente = await this.repositorio.consutarPorEmail(email);
       if(usuarioExistente){
        throw new Error("usuario já existe")
       }
         return this.repositorio.registrar({nome,email,senha})
    }
}