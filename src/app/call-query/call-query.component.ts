import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {ApiServiceService} from '../Services/api-service.service';
import { interval } from 'rxjs';
const ELEMENT_DATA = [
  {AgentId: 'Rahul', AgentStatus: 'Incall', Extension: '4159', ExtStatus:'Talk',TotalCalls:'50(0)',PhoneNo:'8285619174', Duration:'00:00:20', CallType:'1', Campaign:'DL_Hm_Affix_grv', LoginHrs:'2:29:24', TalkTime:'06:04:11', WrapTime:'00:47:26'},
  {AgentId: 'Vikas', AgentStatus: 'Idle', Extension: '2519', ExtStatus:'Wait',TotalCalls:'42(0)',PhoneNo:'8285459174', Duration:'00:00:40', CallType:'2', Campaign:'rot', LoginHrs:'3:29:24', TalkTime:'06:04:11', WrapTime:'00:39:26'},
  {AgentId: 'Vikram', AgentStatus: 'Wrapup', Extension: '1589', ExtStatus:'Talk',TotalCalls:'20(0)',PhoneNo:'8268619174', Duration:'00:00:30', CallType:'3', Campaign:'jskfgj', LoginHrs:'1:29:24', TalkTime:'06:06:11', WrapTime:'00:25:26'},
  {AgentId: 'Vishal', AgentStatus: 'Dialing', Extension: '5900', ExtStatus:'Wait',TotalCalls:'25(0)',PhoneNo:'7285619174', Duration:'00:01:30', CallType:'0', Campaign:'ddfg', LoginHrs:'3:29:24', TalkTime:'06:09:11', WrapTime:'00:30:26'},
  {AgentId: 'Rohit', AgentStatus: 'Ringing', Extension: '9000', ExtStatus:'Pending',TotalCalls:'21(0)',PhoneNo:'6285619174', Duration:'00:00:10', CallType:'3', Campaign:'cgf', LoginHrs:'1:29:24', TalkTime:'06:01:11', WrapTime:'00:42:26'},
  {AgentId: 'Arvind', AgentStatus: 'Incall', Extension: '4000', ExtStatus:'Hold',TotalCalls:'22(0)',PhoneNo:'1285619174', Duration:'00:00:45', CallType:'4', Campaign:'dgd', LoginHrs:'0:29:24', TalkTime:'06:03:11', WrapTime:'00:40:26'},
  {AgentId: 'Pratham', AgentStatus: 'Idle', Extension: '1525', ExtStatus:'Pand',TotalCalls:'32(0)',PhoneNo:'2285619174', Duration:'00:00:32', CallType:'5', Campaign:'dgh', LoginHrs:'2:29:24', TalkTime:'06:11:11', WrapTime:'00:50:26'},
  {AgentId: 'Vipul', AgentStatus: 'Wrapup', Extension: '7858', ExtStatus:'Wait',TotalCalls:'42(0)',PhoneNo:'4285619174', Duration:'00:00:21', CallType:'6', Campaign:'fgdsg', LoginHrs:'1:29:24', TalkTime:'06:21:11', WrapTime:'00:52:26'},
  {AgentId: 'Punit', AgentStatus: 'Dialing', Extension: '7858', ExtStatus:'Talk',TotalCalls:'62(0)',PhoneNo:'0285619174', Duration:'00:00:11', CallType:'0', Campaign:'dtdgg', LoginHrs:'3:29:24', TalkTime:'06:52:11', WrapTime:'00:51:26'},
  {AgentId: 'Rahul', AgentStatus: 'Ringing', Extension: '4159', ExtStatus:'Talk',TotalCalls:'52(0)',PhoneNo:'8285619174', Duration:'00:00:20', CallType:'1', Campaign:'DL_Hm_Affix_grv', LoginHrs:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {AgentId: 'Rahul', AgentStatus: 'Incall', Extension: '4159', ExtStatus:'Talk',TotalCalls:'52(0)',PhoneNo:'8285619174', Duration:'00:00:20', CallType:'1', Campaign:'DL_Hm_Affix_grv', LoginHrs:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {AgentId: 'Rahul', AgentStatus: 'Idle', Extension: '4159', ExtStatus:'Talk',TotalCalls:'52(0)',PhoneNo:'8285619174', Duration:'00:00:20', CallType:'1', Campaign:'DL_Hm_Affix_grv', LoginHrs:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {AgentId: 'Rahul', AgentStatus: 'Wrapup', Extension: '4159', ExtStatus:'Talk',TotalCalls:'52(0)',PhoneNo:'8285619174', Duration:'00:00:20', CallType:'1', Campaign:'DL_Hm_Affix_grv', LoginHrs:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {AgentId: 'Rahul', AgentStatus: 'Dialing', Extension: '4159', ExtStatus:'Talk',TotalCalls:'52(0)',PhoneNo:'8285619174', Duration:'00:00:20', CallType:'1', Campaign:'DL_Hm_Affix_grv', LoginHrs:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {AgentId: 'Rahul', AgentStatus: 'Ringing', Extension: '4159', ExtStatus:'Talk',TotalCalls:'52(0)',PhoneNo:'8285619174', Duration:'00:00:20', CallType:'1', Campaign:'DL_Hm_Affix_grv', LoginHrs:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {AgentId: 'Rahul', AgentStatus: 'Incall', Extension: '4159', ExtStatus:'Talk',TotalCalls:'52(0)',PhoneNo:'8285619174', Duration:'00:00:20', CallType:'1', Campaign:'DL_Hm_Affix_grv', LoginHrs:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {AgentId: 'Rahul', AgentStatus: 'Dialing', Extension: '4159', ExtStatus:'Talk',TotalCalls:'52(0)',PhoneNo:'8285619174', Duration:'00:00:20', CallType:'1', Campaign:'DL_Hm_Affix_grv', LoginHrs:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {AgentId: 'Rahul', AgentStatus: 'Ringing', Extension: '4159', ExtStatus:'Talk',TotalCalls:'52(0)',PhoneNo:'8285619174', Duration:'00:00:20', CallType:'1', Campaign:'DL_Hm_Affix_grv', LoginHrs:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},

];
@Component({
  selector: 'app-call-query',
  templateUrl: './call-query.component.html',
  styleUrls: ['./call-query.component.css']
})
export class CallQueryComponent implements OnInit {
  dataSource
  showChartCall;
  sortDir = 1;
  chart;
  sortingValue = 0;
  Player= ['Rahul','Prince','Sakti','Vinay','Vikas','Punit'];
  Run= [10,20,22,52,56,20];
  view: any[] = [500, 400];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  urldata;
  urldata1;
  legendPosition: string = 'below'
  data = [
    { 'name' : "vikas", 'value' : 765 },
    {'name' : "ram", 'value' : 123},
    {'name' : "shyam", 'value' : 84}
  ]

  colorScheme = {
    domain: ['#5e72e4', '#f5365c', '#2dce89','#11cdef','#fb6340','#172b4d']
  };
  constructor(private apiData : ApiServiceService) { }

  ngOnInit() {
    let url = window.location.href;
    this.urldata = url.split('?') ;
    this.urldata1 = this.urldata[1];
    // this.dataSource = ELEMENT_DATA;
    this.getChannelData(this.urldata1);

    interval(5000).subscribe(x => {
      this.getChannelData(this.urldata1);
    });
  }

  changedCall(value){

    this.showChartCall = value;
    if(this.showChartCall === true){
      this.getChartCall();
    } else {
      this.chart = []
    }

  }

  getChartCall(){
    //  this.ctx = this.canvasRef.nativeElement.getContext('2d');
    //      this.chart = new Chart(this.ctx, {....})
    this.chart = new Chart('canvas1', {
      type: 'pie',
      data: {
        labels: this.Player,
        datasets: [
          {
            data: this.Run,
            borderColor: '#3cba9f',
            backgroundColor: [
              "#3cb371",
              "#0000FF",
              "#9966FF",
              "#4C4CFF",
              "#00FFFF",
              "#f990a7",
              "#aad2ed",
              "#FF00FF",
              "Blue",
              "Red",
              "Blue"
            ],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  getChannelData(urldata1){
    this.apiData.getCallDataWithSortForQueue(urldata1).subscribe((data) => {
      this.dataSource = data;
    })
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
