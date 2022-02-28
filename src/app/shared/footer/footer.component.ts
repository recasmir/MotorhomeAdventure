import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/auth/services/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
  }

  openLogInModal(){
    this.modalService.openLogInModal();
  }
}
