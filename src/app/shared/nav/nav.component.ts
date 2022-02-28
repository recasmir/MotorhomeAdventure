import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/auth/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
  }

  openLogInModal(){
    this.modalService.openLogInModal();
  }

}
