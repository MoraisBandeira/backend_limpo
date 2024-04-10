export type Either<L,R> = Left<L,R> |  Right<L,R>

export class Left<L,R>{
    constructor(value:L){}
    isLeft(){
        return true
    }
    isRight(){
        return false
    }
}

export class Right<L,R>{
    constructor(value:R){}
    isLeft(){
        return false
    }
    isRight(){
        return true
    }
}

export const left = <L,R>(l:L): Either<L,R>=>{
    return new Left(l)
}

export const right = <L,R>(r:R):Either<L,R>=>{
    return new Right(r)
}