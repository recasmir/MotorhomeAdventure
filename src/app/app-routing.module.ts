import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { RentalComponent } from './pages/rental/rental.component';
import { GuardsGuard } from './auth/guards.guard';
import { AdsComponent } from './pages/ads/ads.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path:'auth', 
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'members',
    loadChildren:() => import('./members/members.module').then(m => m.MembersModule),
    canActivate:[GuardsGuard],
    canLoad:[GuardsGuard]
  },
  {
    path:'resources',
    loadChildren:() => import('./resources/resources.module').then(m => m.ResourcesModule)
  },
  {path:'ads', component:AdsComponent},
  {path:'rental', component:RentalComponent},
  {path:'blog', component:BlogComponent},
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//cuando alguien entra al path auth, carga sus hijos. Como es una promsea, cuando se cargue en memoria, el modulo que va a regresar es el AuthModule.
