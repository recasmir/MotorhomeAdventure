import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Member, Trip } from '../../interfaces/auth.interfaces';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  ageList:string[]=['<25','26-35','36-45','46-55','>55'];
  genderList:string[]=['female','male','other'];
  travellerList:string[]=['Family with kids','Couple','Individuals','Group of friends']
  transportList:string[]=['Motorhome','Big camper > 4m','Small camper < 4m']
  tripList = [
    { name: 'Weekend trips'},
    { name: 'Week trips'},
    { name: 'Long adventures, 2 weeks+'}
  ];

  registrationForm:FormGroup=this.fb.group({
    email:['', [Validators.required, Validators.email]],
    pwd:['', [Validators.required, Validators.minLength(6)]],
    repwd:['', [Validators.required, Validators.minLength(6)]],
    fName:['', Validators.required],
    lName:['', Validators.required],
    age:[''],
    gender:[''],
    traveller:['', Validators.required],
    nChildren:[''],
    aChildren:[''],
    dog:[''],
    transport:['', Validators.required],
    typeOfTrip: this.fb.array([]),
    about:['']
  })

  registeredMembers:Member[]=[];
  canClose:boolean=true;

  constructor(private fb:FormBuilder) {}
  
  get age() { return this.registrationForm.get('age') }

  get gender() { return this.registrationForm.get('gender') }

  get traveller() { return this.registrationForm.get('traveller') }

  get transport() { return this.registrationForm.get('transport') }

  changeValue(e: any,value:any) {
    value?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeTrip(e:any) {
    const trips: FormArray = this.registrationForm.get('typeOfTrip') as FormArray;
    if (e.target.checked) {
      trips.push(new FormControl(e.target.value));
      } 
  }

  register(){

    if(this.registrationForm.invalid){
      this.registrationForm.markAllAsTouched();
      this.canClose=false;
      return
    }
    this.canClose=true;

    const newMember= this.registrationForm.value;
    this.registeredMembers.push(newMember);

    console.log('registeeredMembers',this.registeredMembers);
    this.registrationForm.reset();
  }

  validField(inputField:string){
    return this.registrationForm.controls[inputField].errors && this.registrationForm.controls[inputField].touched;
  }
}
