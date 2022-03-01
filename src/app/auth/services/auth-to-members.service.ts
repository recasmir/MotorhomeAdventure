import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../interfaces/auth.interfaces';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthToMembersService {

  registeredMembers:Member[]=[];

  showMemberZone:boolean=false;

  constructor(private router:Router,
              private authService: AuthService) { 
        
        this.registeredMembers=JSON.parse(localStorage.getItem('Registered members')!) || [];
              }

goToMembers(){
    if(this.registeredMembers.length===0){
      this.router.navigate(['./auth/registration']);
    }else{
      this.authService.auth_open = true;
      this.showMemberZone=true;
      this.router.navigate(['./members/profile']);
    }
  }
}
