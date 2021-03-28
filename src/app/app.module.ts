import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveMoniterComponent } from './live-moniter/live-moniter.component';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FilterPipe } from './pipe/filter/filter.pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Chart } from 'chart.js';
import { HttpClientModule } from '@angular/common/http';

import { StatusPipe } from './pipe/status.pipe';
import {ApiServiceService} from './Services/api-service.service'
import {PopoverModule} from "ngx-smart-popover";
// import { MdlPopoverModule } from '@angular-mdl/popover';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CallQueryComponent } from './call-query/call-query.component';
import { CampaignQueueComponent } from './campaign-queue/campaign-queue.component';
import { AllPanelMargeComponent } from './all-panel-marge/all-panel-marge.component';
import { ChannelComponent } from './channel/channel.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AgentComponent } from './agent/agent.component';
import { ChannelFilterPipe } from './pipe/filter/channel-filter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    LiveMoniterComponent,
    FilterPipe,
    StatusPipe,
    CallQueryComponent,
    CampaignQueueComponent,
    AllPanelMargeComponent,
    ChannelComponent,
    ChangePasswordComponent,
    LoginComponent,
    FooterComponent,
    AgentComponent,
    ChannelFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxChartsModule,
    PopoverModule,
    // MdlPopoverModule,
    // Chart,
    // AmChartsModule,
    // TagInputModule,
    // ChartsModule,
    HttpClientModule
    // es,

  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
