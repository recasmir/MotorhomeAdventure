import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

import { SimpleModalComponent } from 'ngx-simple-modal';
import { ModalService } from '../../services/modal.service';
import { AuthService } from '../../services/auth.service';


export interface AlertModel {
  title?: string;
  message: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent extends SimpleModalComponent<AlertModel, null> implements AlertModel {

  title: string = '';
  message: string = '';

  constructor(private router:Router,
              private fb:FormBuilder,
              private modalService:ModalService,
              private authService: AuthService) {
    super();
  }

  confirm() {
    this.close();
  }

  logInForm:FormGroup= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    pwd:['', [Validators.required, Validators.minLength(6)]]
  })

 
  loggedInMembers:string[]=[];
  needRegister:boolean=false;
  canClose:boolean=true;

  logIn(){

    if(this.logInForm.invalid){
      this.logInForm.markAllAsTouched();
      this.canClose=false;
      return
    }

    const memberIn=this.logInForm.value;
    this.loggedInMembers.push(memberIn);

    console.log('memberIn', memberIn)
    

    this.authService.checkCredentials(memberIn.email, memberIn.pwd);

    this.needRegister=this.authService.needRegisterServ;
    this.canClose=this.authService.resultServ;
    console.log('canClose', this.canClose)

    this.router.navigate(['./members/profile']);

    this.logInForm.reset();
    
  }

  validField(inputField:string){
    return this.logInForm.controls[inputField].errors && this.logInForm.controls[inputField].touched;
  }
    
  }
