import { Component, OnInit } from '@angular/core';
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
              private authToMembersService:AuthToMembersService) { }

  ngOnInit(): void {
  }

  openLogInModal(){
    this.modalService.openLogInModal();
  }

  goToMembers(){
    
    this.authToMembersService.goToMembers();
    this.showMemberZone=this.authToMembersService.showMemberZone;
   
  }
}
