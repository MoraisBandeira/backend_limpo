import IUsuario from "./Usuario";

export default interface RepositoryUsuario{
    registrar(usuario:IUsuario):Promise<IUsuario>
    buscarUsuario(id:number):Promise<IUsuario>
    buscarTodos():Promise<IUsuario[]>
    atualizar():Promise<IUsuario | null>
    consultarPorEmail(email:string):Promise<IUsuario | null>
    remover():Promise<IUsuario | null>
    apagar():Promise<IUsuario | null>
}