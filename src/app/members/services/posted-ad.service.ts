import { MemberAd } from './../../auth/interfaces/auth.interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostedAdService {

  public adsListServ:MemberAd[]=[];


  constructor() { }
}
