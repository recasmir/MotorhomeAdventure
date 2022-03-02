import { Component, OnInit } from '@angular/core';
import { PostedAdService } from '../../services/posted-ad.service';

@Component({
  selector: 'app-members-ads',
  templateUrl: './members-ads.component.html',
  styleUrls: ['./members-ads.component.css']
})
export class MembersAdsComponent implements OnInit {

  constructor(private postedAdService:PostedAdService) { }

  ngOnInit(): void {
  }

  get advert(){
    console.log(this.postedAdService.adsListServ)
    return this.postedAdService.adsListServ;
  }

  

}
