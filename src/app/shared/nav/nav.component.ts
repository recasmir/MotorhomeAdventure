import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthToMembersService } from 'src/app/auth/services/auth-to-members.service';
import { ModalService } from 'src/app/auth/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showMemberZone:boolean=false;
  constructor(private modalService:ModalService,
              private authToMembersService:AuthToMembersService,
              private router: Router) { }

  ngOnInit(): void {
  }

  openLogInModal(){
    this.modalService.openLogInModal();
  }

  goToMembers(){
    
    this.authToMembersService.goToMembers();
    this.showMemberZone=this.authToMembersService.showMemberZone;
   
  }

  logout(){
    this.router.navigateByUrl('/auth');
  }
}
