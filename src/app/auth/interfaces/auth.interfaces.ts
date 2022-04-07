export interface MemberAd {
    fName:string,
    lName:string,
    email:string,
    title: string,
    body: string,
    date: Date,
    tags?: string[]
}
export interface Member{
    uid?:string,
    email:string,
    // pwd:string,
    // repwd:string,
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
    ads?:MemberAd[]
    // terms:boolean
}

export interface AuthResponse {
    ok: boolean;
    uid?: string;
    token?:string;
    msg?:string;
    email:string,
    pwd:string,
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
    terms:boolean,
    ads?:MemberAd[]
}

export interface ContactResponse{
    ok: boolean,
    uid?: string,
    msg?:string,
    fNameContact:string,
    lNameContact:string,
    emailContact:string,
    commentsContact:string
}

export interface FetchAllResponse {
    _id:       string;
    email:     string;
    pwd:       string;
    location:  string;
    fName:     string;
    lName:     string;
    age:       string;
    gender?:    string;
    traveller: string;
    nChildren?: number;
    aChildren?: string;
    dog?:       string;
    transport: string;
    trip?:      string[];
    about?:     string;
    terms:     boolean;
    ads?:       Ad[];
    __v:       number;
}

export interface Ad {
    fName: string;
    lName: string;
    email: string;
    title: string;
    body:  string;
    date:  Date;
    tags?:  any[];
    _id:   string;
}