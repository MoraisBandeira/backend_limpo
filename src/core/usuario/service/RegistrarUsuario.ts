import Usuario from "../model/Usuario";
import UseCase from "../../shared/UseCase";
import RepositoryUsuario from "../model/RepositorioUsuario";

interface InputDTO{
    nome:  string
    email: string
    senha: string
}
interface OutputDTO {
    id?:number|undefined
    nome?:  string
    email?: string
    created_at?:Date
}
export default class RegistrarUsuario implements UseCase<InputDTO,OutputDTO>{

    constructor(private readonly repositorio:RepositoryUsuario){}
    
    async executar(input: InputDTO): Promise<OutputDTO> {
       const {nome,email,senha} = input
       const usuarioExistente = await this.repositorio.consutarPorEmail(email);
       if(usuarioExistente){
        throw new Error("usuario já existe")
       }

       return this.mapper(await this.repositorio.registrar({nome,email,senha}))
    }

    private mapper(user:Usuario):OutputDTO{
        return{
            id:user.id,
            nome:user.nome,
            email: user.email,
            created_at:user.created_at
        }
    }

}