import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberProfileComponent } from './pages/member-profile/member-profile.component';
import { MemberMatchComponent } from './pages/member-match/member-match.component';
import { MembersAdsComponent } from './pages/members-ads/members-ads.component';

const routes:Routes = [
  {
    path:'',
    children: [
      {
        path:'profile',
        component: MemberProfileComponent
      },
      {
        path:'match',
        component: MemberMatchComponent
      },
      {
        path:'ads',
        component: MembersAdsComponent
      },
      {
        path:'**',
        redirectTo:'ads'
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
export class MembersRoutingModule { }
