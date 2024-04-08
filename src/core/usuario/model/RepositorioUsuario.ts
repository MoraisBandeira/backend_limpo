import Usuario from "./Usuario";

export default interface RepositoryUsuario{
    registrar(usuario:Usuario):Promise<Usuario>
    buscarTodos():Promise<Usuario[]>
    atualizar():Promise<Usuario | null>
    consutarPorEmail(email:string):Promise<Usuario | null>
    remover():Promise<Usuario | null>
    apagar():Promise<Usuario | null>
}