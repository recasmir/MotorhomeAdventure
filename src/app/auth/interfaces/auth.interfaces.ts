export interface Member{
    email:string,
    pwd:string,
    repwd:string,
    location:string,
    fName:string,
    lName:string,
    age?:string,
    gender?:string,
    traveller:string,
    nChildren?:number,
    aChildren?:string,
    dog?:string,
    transport:string,
    trip?:string[],
    about?:string,
    terms:boolean
}

export interface Trip{
    push(value: Trip):Trip;
    id:number,
    name:string
}

export interface loggedMember{
    email:string,
    pwd:string
}

export interface AuthResponse {
    ok: boolean;
    uid?: string;
    fName?:string;
    token?:string;
    msg?:string;
}