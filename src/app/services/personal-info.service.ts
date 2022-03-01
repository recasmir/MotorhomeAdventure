import { Injectable } from '@angular/core';
import { Member } from '../auth/interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  public personalInfo!: Member;

  constructor() { }
}
