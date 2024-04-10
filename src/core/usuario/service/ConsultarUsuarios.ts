import UseCase from "../../shared/UseCase";
import RepositoryUsuario from "../model/RepositorioUsuario";
import Usuario from "../model/Usuario";

export default class ConsultarUsuarios implements UseCase<void,Usuario[]>{
    constructor(readonly repositorio:RepositoryUsuario){}
    async executar(): Promise<Usuario[]> {
        return await this.repositorio.buscarTodos();
    }

}