import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchAllResponse } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-members-ads',
  templateUrl: './members-ads.component.html',
  styleUrls: ['./members-ads.component.css']
})
export class MembersAdsComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.authService.adsArray=[];
    this.authService.fetchAllMembersAds();
  }

  get adsArray(){
    return this.authService.adsArray;
  }

  seeMember(email:string){

    this.authService.fetchMembers()
    .subscribe((resp)=>{
      for(let i=0; i<resp.length; i++){
        if(resp[i].email===email){
          console.log(resp[i]);
          this.router.navigate(["/members/member"], {state: {data: resp[i]}});
        }
      }
    })
  }


}
