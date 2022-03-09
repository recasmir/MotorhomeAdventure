import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate, CanLoad {

constructor(private authService:AuthService,
            private router:Router){}
            
  canActivate(): Observable<boolean> | boolean {
      // if(this.authService.auth_open ){
      //   return true
      // }else{
      //   this.router.navigate([''])
      //   return false
      // }
      return this.authService.validarToken() //me devuelve true o false
              .pipe(
                tap( valid => {
                  if(!valid){
                    this.router.navigateByUrl('/auth/register')
                  }
                })
              )
  }
  canLoad(): Observable<boolean> | boolean {
      // if(this.authService.auth_open ){
      //   return true
      // }else{
      //   this.router.navigate([''])
      //   return false
      // }
      return this.authService.validarToken() //me devuelve true o false
      .pipe(
        tap( valid => {
          if(!valid){
            this.router.navigateByUrl('/auth/register')
          }
        })
      )
  }
}
