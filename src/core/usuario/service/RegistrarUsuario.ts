import IUsuario from "../model/Usuario";
import UseCase from "../../shared/UseCase";
import RepositoryUsuario from "../model/RepositorioUsuario";
import { Usuario } from "../model/Usuario";

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
export default class RegistrarUsuario implements UseCase<InputDTO,OutputDTO|void>{

    constructor(private readonly repositorio:RepositoryUsuario){}
    
    async executar(input: InputDTO): Promise<OutputDTO|void> {
        try {
            const usuarioExistente = await this.repositorio.consultarPorEmail(input.email);
            if(usuarioExistente){
                throw new Error("usuario já existe")
            }
            const user = Usuario.create(input)
            const registerUser:IUsuario={
                nome:user.getNome.value,
                email:user.getEmail.value,
                senha:user.getSenha.value
            } 
            return await this.mapper(await this.repositorio.registrar(registerUser))
        } catch (err) {
            console.log(err)
        }
    }

    private mapper(user:IUsuario):OutputDTO{
        return{
            id:user.id,
            nome:user.nome,
            email: user.email,
            created_at:user.created_at
        }
    }

}