import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/auth/interfaces/auth.interfaces';
import { PersonalInfoService } from 'src/app/services/personal-info.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {

  memberInfo!:Member;
  registeredMembers:Member[];
  children:boolean=false;

  constructor(private personalInfoService:PersonalInfoService) {
    this.registeredMembers=JSON.parse(localStorage.getItem('Registered members')!) || [];
   }

  ngOnInit(): void {
    // this.memberInfo=this.personalInfoService.personalInfo;
    // console.log(this.memberInfo.fName)

    console.log(this.registeredMembers)
    this.memberInfo=this.registeredMembers[this.registeredMembers.length-1];

    if(this.memberInfo.nChildren){
      this.children=true;
    }
  }

}
