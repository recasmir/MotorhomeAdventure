import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthToMembersService } from 'src/app/auth/services/auth-to-members.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ModalService } from 'src/app/auth/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  clickEventSubscription:Subscription;
  showMemberZoneMenu:boolean=false;
  notLogged:boolean=true;
  
  constructor(private modalService:ModalService,
              private authToMembersService:AuthToMembersService,
              private router: Router,
              private authService: AuthService) {
                
    //calling callShowMember() from login component via authToMemberService            
    this.clickEventSubscription = this.authToMembersService.getClickEvent()
      .subscribe(()=>{
        this.callShowMember();
      })
  }

  ngOnInit(): void {
    //check if token exist to make the member menu show
    this.authService.validarToken()
      .subscribe(resp => {
        if(resp===true){
          this.showMemberZoneMenu=true;
          this.notLogged=false;
        }else{
          this.showMemberZoneMenu=false;
          this.notLogged=true;
        }
      })
  }

  callShowMember(){
    this.showMemberZoneMenu=this.authToMembersService.showMemberZoneMenu;
    this.notLogged=false;
  }
  
  openLogInModal(){
    this.modalService.openLogInModal();
  }

  logout(){
    this.showMemberZoneMenu=false;
    this.notLogged=true;
    this.authService.logout();
    this.router.navigateByUrl('/auth/register');
  }
}
