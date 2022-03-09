import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsComponent } from './shops/shops.component';
import { StopoversComponent } from './stopovers/stopovers.component';
import { EventsComponent } from './events/events.component';
import { ResourcesRoutingModule } from './resources-routing.module';




@NgModule({
  declarations: [
    ShopsComponent,
    StopoversComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,    
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
