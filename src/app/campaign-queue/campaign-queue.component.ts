import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../Services/api-service.service';
import { interval } from 'rxjs';
const ELEMENT_DATA = [
  {QueueSince: 'Rahul', AgentAbndnd: 'Incall', Break: '4159', OfferedCalls:'Talk',Wrapup:'50(0)',Incall:'8285619174', OfferedOnAgents:'00:00:20', Idle:'1', Campaign:'DL_Hm_Affix_grv', AVGHANDLETIME:'2:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:47:26'},
  {QueueSince: 'Vikas', AgentAbndnd: 'Idle', Break: '2519', OfferedCalls:'Wait',Wrapup:'42(0)',Incall:'8285459174', OfferedOnAgents:'00:00:40', Idle:'2', Campaign:'rot', AVGHANDLETIME:'3:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:39:26'},
  {QueueSince: 'Vikram', AgentAbndnd: 'Wrapup', Break: '1589', OfferedCalls:'Talk',Wrapup:'20(0)',Incall:'8268619174', OfferedOnAgents:'00:00:30', Idle:'3', Campaign:'jskfgj', AVGHANDLETIME:'1:29:24', AgentAnswered:'06:06:11', AbndndInQueue:'00:25:26'},
  {QueueSince: 'Vishal', AgentAbndnd: 'Dialing', Break: '5900', OfferedCalls:'Wait',Wrapup:'25(0)',Incall:'7285619174', OfferedOnAgents:'00:01:30', Idle:'0', Campaign:'ddfg', AVGHANDLETIME:'3:29:24', AgentAnswered:'06:09:11', AbndndInQueue:'00:30:26'},
  {QueueSince: 'Rohit', AgentAbndnd: 'Ringing', Break: '9000', OfferedCalls:'Pending',Wrapup:'21(0)',Incall:'6285619174', OfferedOnAgents:'00:00:10', Idle:'3', Campaign:'cgf', AVGHANDLETIME:'1:29:24', AgentAnswered:'06:01:11', AbndndInQueue:'00:42:26'},
  {QueueSince: 'Arvind', AgentAbndnd: 'Incall', Break: '4000', OfferedCalls:'Hold',Wrapup:'22(0)',Incall:'1285619174', OfferedOnAgents:'00:00:45', Idle:'4', Campaign:'dgd', AVGHANDLETIME:'0:29:24', AgentAnswered:'06:03:11', AbndndInQueue:'00:40:26'},
  {QueueSince: 'Pratham', AgentAbndnd: 'Idle', Break: '1525', OfferedCalls:'Pand',Wrapup:'32(0)',Incall:'2285619174', OfferedOnAgents:'00:00:32', Idle:'5', Campaign:'dgh', AVGHANDLETIME:'2:29:24', AgentAnswered:'06:11:11', AbndndInQueue:'00:50:26'},
  {QueueSince: 'Vipul', AgentAbndnd: 'Wrapup', Break: '7858', OfferedCalls:'Wait',Wrapup:'42(0)',Incall:'4285619174', OfferedOnAgents:'00:00:21', Idle:'6', Campaign:'fgdsg', AVGHANDLETIME:'1:29:24', AgentAnswered:'06:21:11', AbndndInQueue:'00:52:26'},
  {QueueSince: 'Punit', AgentAbndnd: 'Dialing', Break: '7858', OfferedCalls:'Talk',Wrapup:'62(0)',Incall:'0285619174', OfferedOnAgents:'00:00:11', Idle:'0', Campaign:'dtdgg', AVGHANDLETIME:'3:29:24', AgentAnswered:'06:52:11', AbndndInQueue:'00:51:26'},
  {QueueSince: 'Rahul', AgentAbndnd: 'Ringing', Break: '4159', OfferedCalls:'Talk',Wrapup:'52(0)',Incall:'8285619174', OfferedOnAgents:'00:00:20', Idle:'1', Campaign:'DL_Hm_Affix_grv', AVGHANDLETIME:'7:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:54:26'},
  {QueueSince: 'Rahul', AgentAbndnd: 'Incall', Break: '4159', OfferedCalls:'Talk',Wrapup:'52(0)',Incall:'8285619174', OfferedOnAgents:'00:00:20', Idle:'1', Campaign:'DL_Hm_Affix_grv', AVGHANDLETIME:'7:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:54:26'},
  {QueueSince: 'Rahul', AgentAbndnd: 'Idle', Break: '4159', OfferedCalls:'Talk',Wrapup:'52(0)',Incall:'8285619174', OfferedOnAgents:'00:00:20', Idle:'1', Campaign:'DL_Hm_Affix_grv', AVGHANDLETIME:'7:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:54:26'},
  {QueueSince: 'Rahul', AgentAbndnd: 'Wrapup', Break: '4159', OfferedCalls:'Talk',Wrapup:'52(0)',Incall:'8285619174', OfferedOnAgents:'00:00:20', Idle:'1', Campaign:'DL_Hm_Affix_grv', AVGHANDLETIME:'7:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:54:26'},
  {QueueSince: 'Rahul', AgentAbndnd: 'Dialing', Break: '4159', OfferedCalls:'Talk',Wrapup:'52(0)',Incall:'8285619174', OfferedOnAgents:'00:00:20', Idle:'1', Campaign:'DL_Hm_Affix_grv', AVGHANDLETIME:'7:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:54:26'},
  {QueueSince: 'Rahul', AgentAbndnd: 'Ringing', Break: '4159', OfferedCalls:'Talk',Wrapup:'52(0)',Incall:'8285619174', OfferedOnAgents:'00:00:20', Idle:'1', Campaign:'DL_Hm_Affix_grv', AVGHANDLETIME:'7:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:54:26'},
  {QueueSince: 'Rahul', AgentAbndnd: 'Incall', Break: '4159', OfferedCalls:'Talk',Wrapup:'52(0)',Incall:'8285619174', OfferedOnAgents:'00:00:20', Idle:'1', Campaign:'DL_Hm_Affix_grv', AVGHANDLETIME:'7:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:54:26'},
  {QueueSince: 'Rahul', AgentAbndnd: 'Dialing', Break: '4159', OfferedCalls:'Talk',Wrapup:'52(0)',Incall:'8285619174', OfferedOnAgents:'00:00:20', Idle:'1', Campaign:'DL_Hm_Affix_grv', AVGHANDLETIME:'7:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:54:26'},
  {QueueSince: 'Rahul', AgentAbndnd: 'Ringing', Break: '4159', OfferedCalls:'Talk',Wrapup:'52(0)',Incall:'8285619174', OfferedOnAgents:'00:00:20', Idle:'1', Campaign:'DL_Hm_Affix_grv', AVGHANDLETIME:'7:29:24', AgentAnswered:'06:04:11', AbndndInQueue:'00:54:26'},

];

@Component({
  selector: 'app-campaign-queue',
  templateUrl: './campaign-queue.component.html',
  styleUrls: ['./campaign-queue.component.css']
})
export class CampaignQueueComponent implements OnInit {
  dataSource
  urldata;
  urldata1;
  constructor(private apiData : ApiServiceService) { }

  ngOnInit() {
    let url = window.location.href;
    this.urldata = url.split('?') ;
    this.urldata1 = this.urldata[1];
    this.getCampaign(this.urldata1);
    // this.dataSource = ELEMENT_DATA;

    interval(3000).subscribe(x => {
      this.getCampaign(this.urldata1);
    });
  }

  getCampaign(urldata1){
    this.apiData.getCallDataWithSortForCampaign(urldata1).subscribe((data) => {
      this.dataSource = data;
    })
  }

}
