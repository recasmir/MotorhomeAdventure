
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { defaultSimpleModalOptions, SimpleModalModule } from 'ngx-simple-modal';

import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
import { WeatherComponent } from './shared/weather/weather.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RentalComponent } from './pages/rental/rental.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PartnersHomeComponent } from './components/partners-home/partners-home.component';
import { ResourcesHomeComponent } from './components/resources-home/resources-home.component';
import { RentalHomeComponent } from './components/rental-home/rental-home.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { AdsComponent } from './pages/ads/ads.component';

import { MembersModule } from './members/members.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    WeatherComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    RentalComponent,
    CarrouselComponent,
    PartnersHomeComponent,
    ResourcesHomeComponent,
    RentalHomeComponent,
    ContactComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleModalModule.forRoot({ container: 'modal-container' }, {
      ...defaultSimpleModalOptions, ...{
        closeOnEscape: true,
        closeOnClickOutside: true,
        wrapperDefaultClasses: 'o-modal o-modal--fade',
        wrapperClass: 'o-modal--fade-in',
        animationDuration: 300,
        autoFocus: true,
        draggable: true
      }
    }),
    MembersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
