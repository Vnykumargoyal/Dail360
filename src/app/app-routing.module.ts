import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPanelMargeComponent} from './all-panel-marge/all-panel-marge.component'
import { LiveMoniterComponent} from './live-moniter/live-moniter.component';
import {ChannelComponent} from './channel/channel.component';
const routes: Routes = [
  {path: '', component: AllPanelMargeComponent},
  {path: 'home', component: AllPanelMargeComponent},
  {path: 'agent', component: LiveMoniterComponent },
  {path: 'channel', component: ChannelComponent},
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  // imports: [
  //   // RouterModule.forRoot(routes)

  // ],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
