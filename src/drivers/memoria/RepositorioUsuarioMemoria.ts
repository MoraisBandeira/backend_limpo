import RepositorioUsuario from "../../core/usuario/model/RepositorioUsuario";
import Usuario from "../../core/usuario/model/Usuario";

export default class RepositorioUsuarioMemoria implements RepositorioUsuario{
    constructor(private readonly usuarios:Usuario[]){}
    async buscarTodos(): Promise<Usuario[]> {
        return this.usuarios;
    }
    async atualizar(): Promise<Usuario | null> {
        throw new Error("Method not implemented.");
    }
    async remover(): Promise<Usuario | null> {
        throw new Error("Method not implemented.");
    }
    async apagar(): Promise<Usuario | null> {
        throw new Error("Method not implemented.");
    }
    async consutarPorEmail(email: string): Promise<Usuario | null> {
       return this.usuarios.find(usuario => usuario.email === email) ?? null
    }
    async registrar(usuario: Usuario): Promise<Usuario> {
        const novoUsuario = {...usuario, id: Math.random()}
        this.usuarios.push(novoUsuario)
        return novoUsuario;
    }
}