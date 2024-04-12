import UseCase from "../../shared/UseCase";
import RepositoryUsuario from "../model/RepositorioUsuario";
import Usuario from "../model/Usuario";
type UsuarioDTO={
    id:number|undefined
    nome: string
    email: string
    created_at:Date|undefined
}
export default class ConsultarUsuarios implements UseCase<void,UsuarioDTO[]>{
    constructor(readonly repositorio:RepositoryUsuario){}
    async executar(): Promise<UsuarioDTO[]> {
        const usuarios = await this.repositorio.buscarTodos();
        return usuarios.map(user=>{
            return{
            id:user.id,
            nome: user.nome,
            email: user.email,
            created_at:user.created_at
        }})
    }

}