import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthToMembersService {

  showMemberZoneMenu!:boolean;

  private subject = new Subject<any>();

  constructor() {}

  sendClickEvent(e:any){
    this.subject.next(e);
  }

  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }
}
