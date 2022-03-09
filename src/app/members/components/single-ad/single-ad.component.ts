import { MemberAd } from './../../../auth/interfaces/auth.interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PostedAdService } from '../../services/posted-ad.service';

@Component({
  selector: 'app-single-ad',
  templateUrl: './single-ad.component.html',
  styleUrls: ['./single-ad.component.css']
})
export class SingleAdComponent implements OnInit {
  
  adsList: MemberAd[]=[];

  constructor(private postedAdService:PostedAdService,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.adsList=this.member.ads!;
  }

  get member(){
    return this.authService.member;
  }
  get advert(){
    return this.postedAdService.adsListServ;
  }

 
  
}
