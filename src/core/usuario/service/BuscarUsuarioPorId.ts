import UseCase from "../../shared/UseCase";
import RepositoryUsuario from "../model/RepositorioUsuario";
import IUsuario from "../model/Usuario";
type InputDTO={
    id:number
}
type OutputDTO={
    nome:string,
    email:string,
    created_at?:Date
    updated_at?:Date
}
export default class BuscarUsuarioPorId implements UseCase<InputDTO,OutputDTO>{
    constructor(private readonly repositorio:RepositoryUsuario){}
    async executar(entrada: InputDTO): Promise<OutputDTO> {

            const userexiste = await this.repositorio.buscarUsuarioId(entrada.id)
            if(userexiste){
                return this.mapper(userexiste);
            }
            throw new Error('Usuario não encontrado')
    }
    private mapper(usuario:IUsuario):OutputDTO{
        const output={
            nome:usuario.nome,
            email:usuario.email,
            created_at:usuario.created_at,
            updated_at:usuario.updated_at
        } as OutputDTO 
        return output;
    }

}