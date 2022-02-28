export interface Member{
    email:string,
    pwd:string,
    repwd:string,
    fName:string,
    lName:string,
    age?:string,
    gender?:string,
    traveller:string,
    nChildren?:string,
    aChildren?:string,
    dog?:string,
    transport:string,
    trip?:string[]
    // more?:string
}

export interface Trip{
    push(value: Trip):Trip;
    id:number,
    name:string
}