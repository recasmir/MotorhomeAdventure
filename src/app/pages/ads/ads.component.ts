import { Component, OnInit } from '@angular/core';
import { Ad, MemberAd } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.adsArray=[];
    this.authService.fetchAllMembersAds();
  }

  get adsArray(){
    return this.authService.adsArray;
  }

}
