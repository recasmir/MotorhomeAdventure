import { Injectable } from '@angular/core';
import { AdsList } from '../interfaces/members.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostedAdService {

  public adsListServ:AdsList[]=[];


  constructor() { }
}
