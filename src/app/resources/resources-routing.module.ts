import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './shops/shops.component';
import { StopoversComponent } from './stopovers/stopovers.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

const routes:Routes = [
  {
    path:'',
    // component: HomeComponent,
    children: [
      {
        path:'shops',
        component: ShopsComponent
      },
      {
        path:'stopovers',
        component:StopoversComponent
      },
      {
        path:'**',
        redirectTo:''
      }
    ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ResourcesRoutingModule { }
