import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-members-ads',
  templateUrl: './members-ads.component.html',
  styleUrls: ['./members-ads.component.css']
})
export class MembersAdsComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.adsArray=[];
    this.authService.fetchAllMembersAds();
  }

  get adsArray(){
    return this.authService.adsArray;
  }

}
