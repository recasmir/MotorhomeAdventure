import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Ad, AuthResponse, ContactResponse, FetchAllResponse, Member, MemberAd } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _member!: Member;
  public showMemberZoneMenu:boolean = false;
  // public allMembersInfo!:any;

  get member(){
    return {...this._member};
  }

  constructor(private http: HttpClient) {}

  register(
    email:string,
    pwd:string,
    location:string,
    fName:string,
    lName:string,
    traveller:string,
    transport:string,
    terms:boolean,
    age?:string,
    gender?:string,
    nChildren?:number,
    aChildren?:string,
    dog?:string,
    trip?:string[],
    about?:string,
    ads?:string[]
  ){
    const url = `${this.baseUrl}/auth/register`;
    const body = { email, pwd, location, fName, lName, age, gender, traveller, terms, nChildren, aChildren, dog, transport, trip, about, ads };

    return this.http.post<AuthResponse>(url, body)
            .pipe(
              tap( resp => {
                console.log(resp);
                if (resp.ok) {
                  localStorage.setItem('token', resp.token!);
                }
              }),
              map( resp => resp.ok),
              catchError( err => of(err.error.msg))
            )
  }

  login( email: string, pwd: string) {

    const url = `${this.baseUrl}/auth`;
    const body = { email, pwd};

    return this.http.post<AuthResponse>(url, body)
            .pipe(
              tap( resp => {
                if (resp.ok) {
                  localStorage.setItem('token', resp.token!);
                }
              }),
              map( resp => resp.ok),
              catchError( err => of(err.error.msg))
            )
  }

//transformamos el resultado en un observable que emite booleanos(porque es lo que nos pide el guard) con map

  validarToken(): Observable<boolean>{
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>(url, {headers})
            .pipe(
              map( resp => {
                localStorage.setItem('token', resp.token!);
                  this._member = {
                    uid: resp.uid!,
                    email:resp.email,
                    location:resp.location,
                    fName:resp.fName,
                    lName:resp.lName,
                    age:resp.age,
                    gender:resp.gender,
                    traveller:resp.traveller,
                    nChildren:resp.nChildren,
                    aChildren:resp.aChildren,
                    dog:resp.dog,
                    transport:resp.transport,
                    trip:resp.trip,
                    about:resp.about,
                    ads:resp.ads
                  }
                return resp.ok;
              }),
              catchError(err => of(false))
            );
  }

    logout(){
      localStorage.clear();
    }

  updateAds(email:string, ads:MemberAd[]){
    const url = `${this.baseUrl}/auth/update`;
    const body = { email, ads };

    console.log(body);
    return this.http.post<AuthResponse>(url, body)
    .pipe(
      map( resp => resp.ok),
      catchError( err => of(err.error.msg))
    )
  }

  contact(fNameContact:string,
          lNameContact:string,
          emailContact:string,
          commentsContact:string){

    const url = `${this.baseUrl}/auth/addcontact`;
    const body = { fNameContact, lNameContact, emailContact, commentsContact};

    console.log(body);
    return this.http.post<ContactResponse>(url, body)
            .pipe(
              tap( resp => console.log(resp)),
              map( resp => resp.ok),
              catchError( err => of(err.error.msg))
            )
  }

  adsArray:any[]=[];
  fetchAllMembersAds(){
    this.http.get<FetchAllResponse[]>(`${this.baseUrl}/auth/all`)
      .subscribe((resp)=>{
         console.log(resp)
        const memberAds=resp.map(member => member.ads);

        // let adsArray:any =[];
        for(let i=0; i<memberAds.length; i++){
          this.adsArray=this.adsArray.concat(memberAds[i]);
        }
        console.log(this.adsArray);
      })
  }
  
}
