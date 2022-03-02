import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Member } from 'src/app/auth/interfaces/auth.interfaces';
import { AdsList } from '../../interfaces/members.interfaces';
import { PostedAdService } from '../../services/posted-ad.service';


@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {

  @ViewChild('bodyAd') bodyAd!: ElementRef<HTMLInputElement>;
  @ViewChild('titleAd') titleAd!: ElementRef<HTMLInputElement>;

  valor:string='';
  advert:AdsList={
    fName:'',
    lName:'',
    email:'',
    titleAdvert:'',
    bodyAdvert:'',
    date: new Date()
  };
  adsList:AdsList[]=[];
  registeredMembers:Member[];

  constructor(private postedAdService:PostedAdService) {
    this.registeredMembers=JSON.parse(localStorage.getItem('Registered members')!) || [];
   }

  ngOnInit(): void {
  }

  postAd(){
    this.advert={
      fName:this.registeredMembers[this.registeredMembers.length-1].fName,
      lName:this.registeredMembers[this.registeredMembers.length-1].lName,
      email:this.registeredMembers[this.registeredMembers.length-1].email,
      titleAdvert:this.titleAd.nativeElement.value,
      bodyAdvert:this.bodyAd.nativeElement.value,
      date:new Date()
    }
    this.adsList.unshift({...this.advert});
    console.log(this.adsList);
    this.postedAdService.adsListServ=this.adsList;
  }

}
