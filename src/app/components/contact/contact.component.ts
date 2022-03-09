import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private fb:FormBuilder,
              private authService:AuthService) { }

  contactForm:FormGroup=this.fb.group({
    fNameContact:['', Validators.required],
    lNameContact:['', Validators.required],
    emailContact:['', [Validators.required, Validators.email]],
    commentsContact:['', Validators.required],
  })

  contact(){
    if(this.contactForm.invalid){
      this.contactForm.markAllAsTouched();
      return
    }
    const { fNameContact, lNameContact, emailContact, commentsContact} = this.contactForm.value;

    this.authService.contact(fNameContact, lNameContact, emailContact, commentsContact).subscribe(ok =>{
      if(ok===true){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Message sent successfully.',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire('Error', ok, 'error');
      }
    })

    this.contactForm.reset();

  }
    validField(inputField:string){
    return this.contactForm.controls[inputField].errors && this.contactForm.controls[inputField].touched;
  }

}
