import IUsuario from "./Usuario";

export default interface RepositoryUsuario{
    buscarUsuarioId(id:number):Promise<IUsuario>
    registrar(usuario:IUsuario):Promise<IUsuario>
    buscarTodos():Promise<IUsuario[]>
    atualizar():Promise<IUsuario | null>
    consultarPorEmail(email:string):Promise<IUsuario | null>
    remover():Promise<IUsuario | null>
    apagar():Promise<IUsuario | null>
}