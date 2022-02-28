import { Injectable } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { LoginComponent } from '../pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private simpleModalService: SimpleModalService) { }

  openLogInModal(): void {
    this.simpleModalService.addModal(LoginComponent)
    .subscribe((isConfirmed) => {
      //We get modal result
      if (isConfirmed) {
        console.log('accepted');
      }
      else {
        console.log('declined');
      }
    });
  }

  closeModal():void{
    this.simpleModalService.removeAll()
  }
}
