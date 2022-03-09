import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {

  children:boolean=false;

  get member(){
    return this.authService.member;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    if(this.member.nChildren){
      this.children=true;
    }
  }

}
