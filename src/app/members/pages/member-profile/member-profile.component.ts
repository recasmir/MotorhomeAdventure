import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {

  // get member(){
  //   return this.authService.member;
  // }

  
  member:any=this.authService.member;
  locationOld:string=this.authService.member.location;

  children:boolean=false;
  details:boolean=true;
  updateDetails:boolean=false;
  newMemberDetails:boolean=false;

  updateMemberDetailsForm = new FormGroup({});

  ageList:string[]=['<25','26-35','36-45','46-55','>55'];
  genderList:string[]=['female','male','other'];
  travellerList:string[]=['Couple with kids', 'Single parent with kids', 'Couple','Individuals','Group of friends']
  transportList:string[]=['Motorhome','Big camper > 4m','Small camper < 4m']
  tripList = [
    { name: ' Weekend trips'},
    { name: ' Week trips'},
    { name: ' Long adventures - 2 weeks+'}
  ];
  locationList:string[]=[" Andalucía", " Aragón", " Canarias", " Cantabria", " Castilla y León", " Castilla-La Mancha", " Catalunya", " Ceuta", " Comunidad Valenciana", " Comunidad de Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja", "Melilla", "Navarra", "País Vasco", "Principado de Asturias", "Región de Murcia"]

  get age() { return this.updateMemberDetailsForm.get('age') }

  get gender() { return this.updateMemberDetailsForm.get('gender') }

  get traveller() { return this.updateMemberDetailsForm.get('traveller') }

  get transport() { return this.updateMemberDetailsForm.get('transport') }

  get location() { return this.updateMemberDetailsForm.get('location') }

  changeValue(e: any,value:any) {
    value?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeTrip(e:any) {
    const trips: FormArray = this.updateMemberDetailsForm.get('trip') as FormArray;
    if (e.target.checked) {
      trips.push(new FormControl(e.target.value));
      } 
  }

  showKidsInfo(e:any){
    let traveller=this.updateMemberDetailsForm.controls['traveller'].value;
    if(traveller==='0: Couple with kids' || traveller==='1: Single parent with kids'){
      this.children=true;
    }else{
      this.children=false;
    }
  }
  
  removeOptionPosition(input:string){
    const valor=this.updateMemberDetailsForm.controls[input].value;
    const output=valor.substring(3);
    this.updateMemberDetailsForm.controls[input].setValue(output);
    console.log(output);
  }

  constructor(private authService: AuthService,
              private fb: FormBuilder) {}

  ngOnInit(): void {

    if(this.member.nChildren){
      this.children=true;
    }

    console.log(this.member.trip);
  }

  // ngOnChange(){
  //   return this.authService.member;
  // }

  showUpdateDetails(){
    this.details=false;
    this.updateDetails=true;

    this.updateMemberDetailsForm=this.fb.group({
      email:[this.member.email],
      location:[this.member.location, Validators.required],
      fName:[this.member.fName, Validators.required],
      lName:[this.member.lName, Validators.required],
      age:[this.member.age],
      gender:[this.member.gender],
      traveller:[this.member.traveller, Validators.required],
      nChildren:[this.member.nChildren],
      aChildren:[this.member.aChildren],
      dog:[this.member.dog],
      transport:[this.member.transport, Validators.required],
      trip: this.fb.array([]),
      about:[this.member.about]
    })
  }

  updateMemberDetails(){
    console.log('old location', this.locationOld);
    const valor=this.updateMemberDetailsForm.controls['location'].value;
    //removing position characteres from location if it has been changed
    if(this.updateMemberDetailsForm.controls['location'].touched || !(this.locationOld===valor)){
      const output=valor.substring(4);
      this.updateMemberDetailsForm.controls['location'].setValue(output);
    }
    console.log('new location', valor)
    const { location, fName, lName, traveller, transport, age, gender, nChildren, aChildren, dog, trip, about } = this.updateMemberDetailsForm.value;
  
    const email = this.authService.member.email;

    this.authService.updateMemberDetails(email, location, fName, lName, traveller, transport, age, gender, nChildren, aChildren, dog, trip, about) 
      .subscribe(ok => {
        console.log(ok);
      })
    
    console.log(this.updateMemberDetailsForm.value);
    this.member=this.updateMemberDetailsForm.value;
    
    this.updateDetails=false;
    this.details=true;

  }
}
