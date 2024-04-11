export  default interface IUsuario{
    id?:number
    nome: string
    email: string
    senha: string
    created_at?:Date
    updated_at?:Date
}

export class Usuario{
    private readonly id?: number | undefined
    private readonly nome: Nome|Error
    private readonly email: Email|Error
    private readonly senha: string
    private readonly created_at?: Date | undefined
    private readonly updated_at?: Date | undefined
    
    private constructor(usuario:IUsuario){
        this.id = usuario?.id;
        this.nome = Nome.create(usuario.nome);
        this.email = Email.create(usuario.email);
        this.senha = usuario.senha;
        this.created_at=usuario?.created_at;
        this.updated_at=usuario?.updated_at;
    }

    static create(usuario:IUsuario):Usuario{
        return new Usuario(usuario)
    }
}

export class Nome {
    private readonly nome:string;
    
    private constructor(nome:string){
        this.nome = nome;
        Object.freeze(this);
    }
    static create(nome:string):Nome|Error{
        return new Nome(nome);
    }
    
    get value ():string{
        return this.nome
    }
}

export class Email {
    private readonly email:string;
    private HostPermitidos:string[] = ['hemoce.ce.gov.br','gmail.com'];
    
    private constructor(email:string){
        this.email = email;
        Object.freeze(this);
    }
    static create(email:string):Email|Error{
        if( this.isValidMail(email) && this.IsValidHost(email) ){
            return new Email(email)
        }
        return new Error('invalid param')
    }

    static isValidMail(email:string):boolean{
        return false
    }

    static IsValidHost(email:string):boolean{
        return true;
    }
    
    get value ():string{
        return this.email
    }

}



