import { AuthToMembersService } from './../../services/auth-to-members.service';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonalInfoService } from 'src/app/services/personal-info.service';
import { Member, Trip } from '../../interfaces/auth.interfaces';
import { AuthService } from '../../services/auth.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  ageList:string[]=['<25','26-35','36-45','46-55','>55'];
  genderList:string[]=['female','male','other'];
  travellerList:string[]=['Couple with kids', 'Single parent with kids', 'Couple','Individuals','Group of friends']
  transportList:string[]=['Motorhome','Big camper > 4m','Small camper < 4m']
  tripList = [
    { name: ' Weekend trips'},
    { name: ' Week trips'},
    { name: ' Long adventures - 2 weeks+'}
  ];
  locationList:string[]=["Andalucía", "Aragón", "Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Catalunya", "Ceuta", "Comunidad Valenciana", "Comunidad de Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja", "Melilla", "Navarra", "País Vasco", "Principado de Asturias", "Región de Murcia"]
  

  registrationForm:FormGroup=this.fb.group({
    email:['', [Validators.required, Validators.email]],
    pwd:['', [Validators.required, Validators.minLength(6)]],
    repwd:['', [Validators.required, Validators.minLength(6)]],
    location:['', Validators.required],
    fName:['', Validators.required],
    lName:['', Validators.required],
    age:[''],
    gender:[''],
    traveller:['', Validators.required],
    nChildren:[],
    aChildren:[''],
    dog:[''],
    transport:['', Validators.required],
    trip: this.fb.array([]),
    about:[''],
    terms:[false, Validators.requiredTrue]
  })

  registeredMembers:Member[]=[];
  showKids:boolean=false;
  showMemberZone:boolean=false;
  firstName:string='';
  lastName:string='';

  constructor(private fb:FormBuilder,
              private modalService:ModalService,
              private router: Router,
              private authService:AuthService,
              private personalInfoService:PersonalInfoService,
              private authToMembersService:AuthToMembersService) {
                
      this.registeredMembers=JSON.parse(localStorage.getItem('Registered members')!) || [];
              }
  
  get age() { return this.registrationForm.get('age') }

  get gender() { return this.registrationForm.get('gender') }

  get traveller() { return this.registrationForm.get('traveller') }

  get transport() { return this.registrationForm.get('transport') }

  get location() { return this.registrationForm.get('location') }

  changeValue(e: any,value:any) {
    value?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeTrip(e:any) {
    const trips: FormArray = this.registrationForm.get('trip') as FormArray;
    if (e.target.checked) {
      trips.push(new FormControl(e.target.value));
      } 
  }

  showKidsInfo(e:any){
    let traveller=this.registrationForm.controls['traveller'].value;
    if(traveller==='0: Couple with kids' || traveller==='1: Single parent with kids'){
      this.showKids=true;
    }else{
      this.showKids=false;
    }
  }
  
  register(){

    if(this.registrationForm.invalid){
      this.registrationForm.markAllAsTouched();
      return
    }

    const newMember= this.registrationForm.value;
    this.registeredMembers.push(newMember);

    // this.firstName=this.registrationForm.controls['fName'].value;
    // this.lastName=this.registrationForm.controls['lName'].value;

    localStorage.setItem('Registered members', JSON.stringify(this.registeredMembers));

    //setting true for guard to allow navigation
    this.authService.auth_open=true;

    //passing peronal info to profile page
    this.personalInfoService.personalInfo=newMember;

    // this.authToMembersService.goToMembers();
    // this.showMemberZone=this.authToMembersService.showMemberZone;
    // console.log('showmemberzone', this.showMemberZone);

    this.router.navigate(['./members/profile']);

    console.log('registeredMembers',this.registeredMembers);
    this.registrationForm.reset();
  }

  validField(inputField:string){
    return this.registrationForm.controls[inputField].errors && this.registrationForm.controls[inputField].touched;
  }

  openLogInModal(){
    this.modalService.openLogInModal();
  }
}
