import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './shops/shops.component';
import { StopoversComponent } from './stopovers/stopovers.component';
import { ResourcesRoutingModule } from './resources-routing.module';



@NgModule({
  declarations: [
    ShopsComponent,
    StopoversComponent
  ],
  imports: [
    CommonModule,    
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
