import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthResponse, loggedMember, Member } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registeredMembers:Member[];
  loggedInMembers:loggedMember[];
  needRegisterServ:boolean=false;
  resultServ:boolean=true;
  auth_open:boolean=false;

  constructor(private router:Router,
              private http: HttpClient) {

    this.registeredMembers=JSON.parse(localStorage.getItem('Registered members')!) || [];
   
   this.loggedInMembers=JSON.parse(localStorage.getItem('Logged in members')!) || [];
  }

  checkCredentials(email:string, pwd:string): boolean{

    let newMemberIn={
      email,
      pwd
    }

    this.registeredMembers=JSON.parse(localStorage.getItem('Registered members')!) || [];

    if(this.registeredMembers.length===0){
      this.needRegisterServ=true;
      this.resultServ=false;
    }

    for( let member of this.registeredMembers){

      if(email===member.email && pwd===member.pwd){

        this.loggedInMembers.push({...newMemberIn});

        localStorage.setItem('Logged in members', JSON.stringify(this.loggedInMembers));

        this.resultServ=true;
        
        this.auth_open = true;
        console.log('SERV auth_open', this.auth_open)
           
        return true
      }else{
        this.needRegisterServ=true;
        this.resultServ=false;
        this.auth_open = false;
        this.router.navigate(['./members/profile'])
        }
      }
      return false
}

  //conexión con la bbdd

  // private baseUrl: string = environment.baseUrl;

  // login( email: string, pwd: string) {

  //   const url = `${this.baseUrl}/auth`;
  //   const body = { email, pwd};

  //   this.http.post<AuthResponse>(url, body);
  // }





}
