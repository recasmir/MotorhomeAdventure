import { Component, OnInit } from '@angular/core';
import { PostedAdService } from '../../services/posted-ad.service';

@Component({
  selector: 'app-single-ad',
  templateUrl: './single-ad.component.html',
  styleUrls: ['./single-ad.component.css']
})
export class SingleAdComponent implements OnInit {


  constructor(private postedAdService:PostedAdService) { }

  ngOnInit(): void {
  }

  get advert(){
    // console.log(this.postedAdService.adsListServ)
    return this.postedAdService.adsListServ;
  }

 
  
}
