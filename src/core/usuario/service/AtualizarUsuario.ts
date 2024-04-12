import IUsuario from "../model/Usuario";
import UseCase from "../../shared/UseCase";
import RepositoryUsuario from "../model/RepositorioUsuario";
import { Usuario } from "../model/Usuario";

interface InputDTO{
    id:number
    nome?:  string
    email?: string
    senha?: string
}
interface OutputDTO {
    nome:  string
    email: string
    updated_at?:Date
}
export default class AtualizarUsuario implements UseCase<InputDTO,OutputDTO|void>{
    constructor(private readonly repositorio:RepositoryUsuario){}
    executar(entrada: InputDTO): Promise<void | OutputDTO> {
    try {
        const usuarioExistente = this.repositorio.buscarUsuario(entrada.id);
        const user = Usuario.create(usuarioExistente);
        if(usuarioExistente){
            reuturn
        }
        throw new Error("Usuario não encontrado!")
    } catch (error) {
        console.log(error)
    }
    }

    mapper():OutputDTO{}

}