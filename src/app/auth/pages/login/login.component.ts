import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { ModalService } from '../../services/modal.service';
import { AuthService } from '../../services/auth.service';
import { AuthToMembersService } from './../../services/auth-to-members.service';

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
              private authService: AuthService,
              private authToMembersService: AuthToMembersService) {
    super();
    
  }

  confirm() {
    this.close();
  }

  logInForm:FormGroup= this.fb.group({
    email:['test1@test.com', [Validators.required, Validators.email]],
    pwd:['123456', [Validators.required, Validators.minLength(6)]]
  })

  showMemberZoneMenu:boolean=false;

  logIn(){

    if(this.logInForm.invalid){
      this.logInForm.markAllAsTouched();
      return
    }

    const { email, pwd } = this.logInForm.value;

    this.authService.login(email, pwd)
      .subscribe(ok => {
        console.log(ok);
        if(ok===true){
          this.authToMembersService.showMemberZoneMenu=true;
          this.authToMembersService.sendClickEvent(this.showMemberZoneMenu);
          this.modalService.closeModal();
          this.router.navigate(['./members/profile']);
        }else{
          Swal.fire('Error', ok, 'error');
        }
      })
      this.logInForm.reset();
  }

  logout(){
    this.authService.logout();
  }
  
  validField(inputField:string){
    return this.logInForm.controls[inputField].errors && this.logInForm.controls[inputField].touched;
  }
    
  }
