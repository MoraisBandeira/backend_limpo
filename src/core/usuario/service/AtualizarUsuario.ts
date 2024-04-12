import UseCase from "../../shared/UseCase"
import RepositoryUsuario from "../model/RepositorioUsuario";
import IUsuario from "../model/Usuario";

type InputDTO={
    id:number
    nome?:string
    email?:string
}
type OutputDTO={}
export default class AtualizarUsuario implements UseCase<InputDTO,void>{
    constructor(private readonly repositorio:RepositoryUsuario){}
    async executar(entrada: InputDTO): Promise<void> {
        let user:IUsuario;
        user = await this.repositorio.buscarUsuarioId(entrada.id)
        const top = Object.assign(user,entrada)
       console.log(top)
        
    }

    private mapper(user:IUsuario):OutputDTO{
        return{} as OutputDTO;
    }
    
}