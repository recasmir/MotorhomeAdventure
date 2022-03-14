import { Component, OnInit } from '@angular/core';
import { FetchAllResponse } from 'src/app/auth/interfaces/auth.interfaces';

@Component({
  selector: 'app-member-single',
  templateUrl: './member-single.component.html',
  styleUrls: ['./member-single.component.css']
})
export class MemberSingleComponent implements OnInit {

  constructor() { }

  member!:FetchAllResponse;
  ngOnInit(): void {
    this.member=history.state.data;
  }

}
