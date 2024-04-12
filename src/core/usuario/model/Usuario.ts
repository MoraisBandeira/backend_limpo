export  default interface IUsuario{
    id?:number
    nome: string
    email: string
    senha: string
    created_at?:Date
    updated_at?:Date
}

export class Usuario{
    private readonly senha: Senha
    private readonly nome: Nome
    private readonly email: Email
    private readonly id?: number | undefined
    private readonly created_at?: Date | undefined
    private readonly updated_at?: Date | undefined
    
    private constructor(usuario:IUsuario){
        this.id = usuario?.id;
        this.created_at=usuario?.created_at;
        this.updated_at=usuario?.updated_at;
        this.nome = Nome.create(usuario.nome);
        this.senha = Senha.create(usuario.senha);
        this.email = Email.create(usuario.email);
    }

    static create(usuario:IUsuario):Usuario{
        return new Usuario(usuario)
    }

    get getNome():Nome|Error{
        return this.nome;
    }
}
export abstract class Validate {
    static isValidMail(email:string):boolean{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    static isValidHost(email:string):boolean{
        const HostPermitidos:string[] = ['hemoce.ce.gov.br','gmail.com'];
        const partesEmail = email.split("@");
        if (partesEmail.length !== 2) {
            return false;
        }
        const dominioEmail = partesEmail[1];
        return HostPermitidos.includes(dominioEmail);
    }
    static detectarCaracteresEspeciais(nome: string): boolean {
        const regex = /[^\w\sÀ-ÿ'-]/;
        return !regex.test(nome);
    }
    static  detectarNumeros(texto: string): boolean {
        const regex = /\d/;
        return !regex.test(texto);
    }
}

export class Nome extends Validate{
    private readonly nome:string;
    
    private constructor(nome:string){
        super()
        this.nome = nome;
        Object.freeze(this);
    }
    static create(nome:string):Nome{
        if(this.detectarCaracteresEspeciais(nome),this.detectarNumeros(nome)){
            return new Nome(nome);
        }
        throw Error('Nome Invalido');
    }
    
    get value ():string{
        return this.nome
    }
}

export class Email extends Validate{
    private readonly email:string;
    
    private constructor(email:string){
        super();
        this.email = email;
        Object.freeze(this);
    }
    static create(email:string):Email{
        if( this.isValidMail(email) && this.isValidHost(email) ){
            return new Email(email)
        }
        throw new Error('Email fora do padrão')
    }
    get value ():string{
        return this.email
    }
}

export class Senha {
    private readonly senha:string;

    private constructor(senha:string){
        this.senha = senha;
    }

    static create(senha:string):Senha{
        return new Senha(senha);
    }
    get value():string{
        return this.senha;
    }
}



