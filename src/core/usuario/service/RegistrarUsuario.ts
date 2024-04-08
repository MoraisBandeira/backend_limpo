import UseCase from "../../shared/UseCase";
import RepositoryUsuario from "../model/RepositorioUsuario";

type Entrada = {
    nome: string
    email: string
    senha: string
}

export default class RegistrarUsuario implements UseCase<Entrada,void>{
    constructor(private readonly repositorio:RepositoryUsuario){}
    async executar(input: Entrada): Promise<void> {
       const {nome,email,senha} = input

       const usuarioExistente = await this.repositorio.consutarPorEmail(email);
       if(usuarioExistente){
        throw new Error("usuario já existe")
       }

       await this.repositorio.registrar({nome,email,senha})
    }

}