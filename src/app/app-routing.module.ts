import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPanelMargeComponent} from './all-panel-marge/all-panel-marge.component'
import { LiveMoniterComponent} from './live-moniter/live-moniter.component';
import {ChannelComponent} from './channel/channel.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AgentComponent } from './agent/agent.component';
const routes: Routes = [
  {path: '', component: AllPanelMargeComponent},
  {path: 'home', component: AllPanelMargeComponent},
  {path: 'agent', component: LiveMoniterComponent },
  {path: 'channel', component: ChannelComponent},
  {path: 'login', component:LoginComponent},
  {path: 'npass', component: ChangePasswordComponent},
  {path: 'agentHome', component:AgentComponent},
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
