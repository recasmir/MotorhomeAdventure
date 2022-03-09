import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';
import { MemberAd } from './../../../auth/interfaces/auth.interfaces';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {

  @ViewChild('bodyAd') body!: ElementRef<HTMLInputElement>;
  @ViewChild('titleAd') title!: ElementRef<HTMLInputElement>;

  advert:MemberAd={
    fName:'',
    lName:'',
    email:'',
    title: '',
    body: '',
    date: new Date()
  }

  adsList:MemberAd[]=[];
  
  constructor(private authService:AuthService) {}

  ngOnInit(): void {
  }

  postAd(){

    this.advert={
        fName:this.authService.member.fName,
        lName:this.authService.member.lName,
        email:this.authService.member.email,
        title:this.title.nativeElement.value,
        body:this.body.nativeElement.value.trim(),
        date:new Date()
    }
    const email = this.authService.member.email;

    //catch ads already saved in db
    this.adsList=this.authService.member.ads!;

    //add new add in ads array
    this.adsList.unshift({...this.advert});

    //update db with new ads array 
    this.authService.updateAds(email, this.adsList)
      .subscribe(ok => {
        console.log(ok);
      })
      this.title.nativeElement.value='';
      this.body.nativeElement.value='';
  }

}
