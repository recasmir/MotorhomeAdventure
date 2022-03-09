import { AuthToMembersService } from './../../services/auth-to-members.service';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ModalService } from '../../services/modal.service';
import Swal from 'sweetalert2';

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
  locationList:string[]=[" Andalucía", " Aragón", " Canarias", " Cantabria", " Castilla y León", " Castilla-La Mancha", " Catalunya", " Ceuta", " Comunidad Valenciana", " Comunidad de Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja", "Melilla", "Navarra", "País Vasco", "Principado de Asturias", "Región de Murcia"]
  

  registrationForm:FormGroup=this.fb.group({
    email:['test5@test.com', [Validators.required, Validators.email]],
    pwd:['123456', [Validators.required, Validators.minLength(6)]],
    repwd:['123456', [Validators.required, Validators.minLength(6)]],
    location:[' Catalunya', Validators.required],
    fName:['Mire', Validators.required],
    lName:['Reca', Validators.required],
    age:['36-45'],
    gender:['female'],
    traveller:['Couple', Validators.required],
    nChildren:[],
    aChildren:[''],
    dog:['no'],
    transport:['Motorhome', Validators.required],
    trip: this.fb.array([]),
    about:[''],
    terms:[true, Validators.requiredTrue]
  })

  showKids:boolean=false;
  showMemberZoneMenu:boolean=false;

  constructor(private fb:FormBuilder,
              private modalService:ModalService,
              private router: Router,
              private authService:AuthService,
              private authToMembersService:AuthToMembersService) {}
  
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
  

  removeOptionPosition(input:string){
    const valor=this.registrationForm.controls[input].value;
    const output=valor.substring(3);
    this.registrationForm.controls[input].setValue(output);
    console.log(output);
  }

  register(){

    if(this.registrationForm.invalid){
      this.registrationForm.markAllAsTouched();
      return
    }

    console.log(this.registrationForm.value);

    //removing position characteres from location
    const valor=this.registrationForm.controls['location'].value;
    const output=valor.substring(4);
    this.registrationForm.controls['location'].setValue(output);

    const { email, pwd, location, fName, lName, age, gender, traveller, nChildren, aChildren, dog, transport, trip, about, terms } = this.registrationForm.value;


    this.authService.register(email, pwd, location, fName, lName, traveller, transport, terms, age, gender, nChildren, aChildren, dog,  trip, about )
      .subscribe(ok => {
        console.log(ok);
        if(ok===true){
          this.authToMembersService.showMemberZoneMenu=true;
          this.authToMembersService.sendClickEvent(this.showMemberZoneMenu);
          this.router.navigate(['./members/profile']);
        }else{
          Swal.fire('Error', ok, 'error');
        }
      })

      this.registrationForm.reset();
  }

  validField(inputField:string){
    return this.registrationForm.controls[inputField].errors && this.registrationForm.controls[inputField].touched;
  }

  openLogInModal(){
    this.modalService.openLogInModal();
  }
}
