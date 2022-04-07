import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersRoutingModule } from './members-routing.module';
import { MemberProfileComponent } from './pages/member-profile/member-profile.component';
import { MemberMatchComponent } from './pages/member-match/member-match.component';
import { MembersAdsComponent } from './pages/members-ads/members-ads.component';
import { AddAdComponent } from './components/add-ad/add-ad.component';
import { SingleAdComponent } from './components/single-ad/single-ad.component';
import { SingleProfileComponent } from './components/single-profile/single-profile.component';
import { MemberSingleComponent } from './member-single/member-single.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
      MemberProfileComponent,
      MemberMatchComponent,
      MembersAdsComponent,
      AddAdComponent,
      SingleAdComponent,
      SingleProfileComponent,
      MemberSingleComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SingleAdComponent
  ]
})
export class MembersModule { }
