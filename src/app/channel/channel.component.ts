import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {MatSort, MatTableDataSource, Sort} from '@angular/material';
import { interval } from 'rxjs';
import { Chart } from 'chart.js';
import {ApiServiceService} from '../Services/api-service.service';

export interface PeriodicElement {
  CampaignID: string;
  AgentStatus: string;
  Extension: string;
  ExtStatus: string;
  TotalCalls: string;
  PhoneNo: String;
  Duration: string;
  CallType: string;
  Campaign: string;
  LoginHrs: string;
  TalkTime: string;
  WrapTime: string;
}

const ELEMENT_DATA = [
  {CampaignID: 'Rahul', Status: 'Incall', Campaign: '4159', Channel:'Talk',Exten:'50(0)',PhoneNo:'8285619174', ReqSince:'00:00:20', ReqType:'1', ReqReason:'DL_Hm_Affix_grv', Since:'2:29:24', TalkTime:'06:04:11', WrapTime:'00:47:26'},
  {CampaignID: 'Vikas', Status: 'Idle', Campaign: '2519', Channel:'Wait',Exten:'42(0)',PhoneNo:'8285459174', ReqSince:'00:00:40', ReqType:'2', ReqReason:'rot', Since:'3:29:24', TalkTime:'06:04:11', WrapTime:'00:39:26'},
  {CampaignID: 'Vikram', Status: 'Wrapup', Campaign: '1589', Channel:'Talk',Exten:'20(0)',PhoneNo:'8268619174', ReqSince:'00:00:30', ReqType:'3', ReqReason:'jskfgj', Since:'1:29:24', TalkTime:'06:06:11', WrapTime:'00:25:26'},
  {CampaignID: 'Vishal', Status: 'Dialing', Campaign: '5900', Channel:'Wait',Exten:'25(0)',PhoneNo:'7285619174', ReqSince:'00:01:30', ReqType:'0', ReqReason:'ddfg', Since:'3:29:24', TalkTime:'06:09:11', WrapTime:'00:30:26'},
  {CampaignID: 'Rohit', Status: 'Ringing', Campaign: '9000', Channel:'Pending',Exten:'21(0)',PhoneNo:'6285619174', ReqSince:'00:00:10', ReqType:'3', ReqReason:'cgf', Since:'1:29:24', TalkTime:'06:01:11', WrapTime:'00:42:26'},
  {CampaignID: 'Arvind', Status: 'Incall', Campaign: '4000', Channel:'Hold',Exten:'22(0)',PhoneNo:'1285619174', ReqSince:'00:00:45', ReqType:'4', ReqReason:'dgd', Since:'0:29:24', TalkTime:'06:03:11', WrapTime:'00:40:26'},
  {CampaignID: 'Pratham', Status: 'Idle', Campaign: '1525', Channel:'Pand',Exten:'32(0)',PhoneNo:'2285619174', ReqSince:'00:00:32', ReqType:'5', ReqReason:'dgh', Since:'2:29:24', TalkTime:'06:11:11', WrapTime:'00:50:26'},
  {CampaignID: 'Vipul', Status: 'Wrapup', Campaign: '7858', Channel:'Wait',Exten:'42(0)',PhoneNo:'4285619174', ReqSince:'00:00:21', ReqType:'6', ReqReason:'fgdsg', Since:'1:29:24', TalkTime:'06:21:11', WrapTime:'00:52:26'},
  {CampaignID: 'Punit', Status: 'Dialing', Campaign: '7858', Channel:'Talk',Exten:'62(0)',PhoneNo:'0285619174', ReqSince:'00:00:11', ReqType:'0', ReqReason:'dtdgg', Since:'3:29:24', TalkTime:'06:52:11', WrapTime:'00:51:26'},
  {CampaignID: 'Rahul', Status: 'Ringing', Campaign: '4159', Channel:'Talk',Exten:'52(0)',PhoneNo:'8285619174', ReqSince:'00:00:20', ReqType:'1', ReqReason:'DL_Hm_Affix_grv', Since:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {CampaignID: 'Rahul', Status: 'Incall', Campaign: '4159', Channel:'Talk',Exten:'52(0)',PhoneNo:'8285619174', ReqSince:'00:00:20', ReqType:'1', ReqReason:'DL_Hm_Affix_grv', Since:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {CampaignID: 'Rahul', Status: 'Idle', Campaign: '4159', Channel:'Talk',Exten:'52(0)',PhoneNo:'8285619174', ReqSince:'00:00:20', ReqType:'1', ReqReason:'DL_Hm_Affix_grv', Since:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {CampaignID: 'Rahul', Status: 'Wrapup', Campaign: '4159', Channel:'Talk',Exten:'52(0)',PhoneNo:'8285619174', ReqSince:'00:00:20', ReqType:'1', ReqReason:'DL_Hm_Affix_grv', Since:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {CampaignID: 'Rahul', Status: 'Dialing', Campaign: '4159', Channel:'Talk',Exten:'52(0)',PhoneNo:'8285619174', ReqSince:'00:00:20', ReqType:'1', ReqReason:'DL_Hm_Affix_grv', Since:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {CampaignID: 'Rahul', Status: 'Ringing', Campaign: '4159', Channel:'Talk',Exten:'52(0)',PhoneNo:'8285619174', ReqSince:'00:00:20', ReqType:'1', ReqReason:'DL_Hm_Affix_grv', Since:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {CampaignID: 'Rahul', Status: 'Incall', Campaign: '4159', Channel:'Talk',Exten:'52(0)',PhoneNo:'8285619174', ReqSince:'00:00:20', ReqType:'1', ReqReason:'DL_Hm_Affix_grv', Since:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {CampaignID: 'Rahul', Status: 'Dialing', Campaign: '4159', Channel:'Talk',Exten:'52(0)',PhoneNo:'8285619174', ReqSince:'00:00:20', ReqType:'1', ReqReason:'DL_Hm_Affix_grv', Since:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},
  {CampaignID: 'Rahul', Status: 'Ringing', Campaign: '4159', Channel:'Talk',Exten:'52(0)',PhoneNo:'8285619174', ReqSince:'00:00:20', ReqType:'1', ReqReason:'DL_Hm_Affix_grv', Since:'7:29:24', TalkTime:'06:04:11', WrapTime:'00:54:26'},

];


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit,OnDestroy {

  searchText;
  single: any[];
  // @Input() serch: boolean;
  public options: any;
  // @ViewChild('myCanvas', {static: true}) canvasRef: ElementRef;
  view: any[] = [500, 400];
  data ;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below'


  colorScheme = {
    domain: ['#172b4d', '#f5365c', '#2dce89','#11cdef','#fb6340','#172b4d']
  };
  private timer;
  filter;
  showChart = false;
  val;
  chart;
  searchData = [];
  value1;
  value2;
  value3;
  value4;
  value5;
  value6;
  value7;
  value8;
  value9;
  value10;
  value11;
  error;
  urldata;
  urldata1;
  headerData;
  displayedColumns: string[] = [ 'AgentId', 'AgentStatus', 'Extension','ExtStatus','TotalCalls','PhoneNo','Duration','CallType','Campaign','LoginHrs','TalkTime','WrapTime'];
  dataSource;
  sortDir = 1;
  sortingValue = 0;
  Player= ['Rahul','Prince','Sakti','Vinay','Vikas','Punit'];
  Run= [10,20,22,52,56,20];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort,{ static: true }) sort: MatSort;

  constructor(private apiData : ApiServiceService) {
    // Object.assign(this, { data });
   }

  ngOnInit() {
    let url = window.location.href;
    this.urldata = url.split('?') ;
    this.urldata1 = this.urldata[1];
    this.callHeader(this.urldata1);
    // this.callData();
    this.getSortData('','',this.urldata1)

    interval(3000).subscribe(x => {
      this.callHeader(this.urldata1);
      // this.callData();
      this.getSortData('','',this.urldata1);
    });

    this.dataSource = ELEMENT_DATA;
    // this.getChart()

  }

  getChart(urldata1){
    this.apiData.getChannelHeaderData(urldata1).subscribe((data)=>{
      this.data = [
        {'name': 'TotalLogin', 'value': data[0].TotalLogin},
        {'name': 'blockCount', 'value':data[0].blockCount},
        {'name': 'breakCount', 'value':data[0].breakCount},
        {'name': 'idleCount', 'value':data[0].idleCount},
        {'name': 'TotalCalls', 'value':data[0].TotalCalls},
        {'name': 'incallCount', 'value':data[0].incallCount},
        {'name': 'wrapCount', 'value':data[0].wrapCount}
      ]
    })

  }




  callHeader(urldata1){
    this.apiData.getChannelHeaderData(urldata1).subscribe((data)=>{
      this.headerData = data;
    })
  }

  callData(urldata1){
    this.apiData.getCallData(urldata1).subscribe((data) => {
      this.dataSource = data;
    })
  }

  onSortClick(event, val) {
    if(this.sortingValue === 0){

      let target = event.currentTarget,
      classList = target.classList;

      if (classList.contains('fa-chevron-up')) {
        classList.remove('fa-chevron-up');
        classList.add('fa-chevron-down');
        this.sortDir=-1;
        this.getSortData('asc',val,this.urldata1)
      } else {
        classList.add('fa-chevron-up');
        classList.remove('fa-chevron-down');
        this.sortDir=1;
        this.getSortData('desc',val,this.urldata1)
      }

      // this.sortArr(val);
      // this.sortingValue = 1;
    }

  }

  sortArr(colName:any){
    this.dataSource.sort((a,b)=>{
      a= a[colName].toLowerCase();
      b= b[colName].toLowerCase();
      return a.localeCompare(b) * this.sortDir;
    });
  }

  getSortData(col,type,urldata1){
    this.apiData.getChannelData(col,type,urldata1).subscribe((data) => {

      this.dataSource = data;
    })
  }



  filterAdded(value) {

    if(typeof(value) === 'string'){
       this.val = value;
    } else {
      this.val = value.currentTarget.value;
    }

    console.log(this.value1)
    if(this.val.length > 0) {
      if(this.value1 === undefined) {
        this.value1 = this.val;
        this.searchText = undefined;
      } else if(this.value2 === undefined) {
        this.value2 = this.val;
        this.searchText = undefined;
      } else if(this.value3 === undefined) {
        this.value3 = this.val;
        this.searchText = undefined;
      } else if(this.value4 === undefined) {
        this.value4 = this.val;
        this.searchText = undefined;
      } else if(this.value5 === undefined) {
        this.value5 = this.val;
        this.searchText = undefined;
      } else if(this.value6 === undefined) {
        this.value6 = this.val;
        this.searchText = undefined;
      } else if(this.value7 === undefined) {
        this.value7 = this.val;
        this.searchText = undefined;
      } else if(this.value8 === undefined) {
        this.value8 = this.val;
        this.searchText = undefined;
      } else if(this.value9 === undefined) {
        this.value9 = this.val;
        this.searchText = undefined;
      } else {
        this.error = "You cannot be enter more then 9 tags";
      }
    }
  }

  // customFilter(value: string){
  //   this.searchText = value;

  //   this.filterAdded(this.searchText);
  // }

  customFilter(value){

    if(typeof(value) === 'string'){
        this.val = value;
    } else {
      this.val = value.currentTarget.value;
    }
    if(this.searchData.indexOf(this.val) === -1){
      if(this.searchData.length <= 9){
        this.searchData.push(this.val);
        this.getSortSearchData();
      } else {
        this.error = "You cannot be enter more then 9 tags";
      }

    }

  }

  getSortSearchData(){
    if(this.searchData.length === 1) {
      this.value1 = this.val;
      this.searchText = undefined;
    } else if(this.searchData.length === 2) {
      this.value2 = this.val;
      this.searchText = undefined;
    } else if(this.searchData.length === 3) {
      this.value3 = this.val;
      this.searchText = undefined;
    } else if(this.searchData.length === 4) {
      this.value4 = this.val;
      this.searchText = undefined;
    } else if(this.searchData.length === 5) {
      this.value5 = this.val;
      this.searchText = undefined;
    } else if(this.searchData.length === 6) {
      this.value6 = this.val;
      this.searchText = undefined;
    } else if(this.searchData.length === 7) {
      this.value7 = this.val;
      this.searchText = undefined;
    } else if(this.searchData.length === 8) {
      this.value8 = this.val;
      this.searchText = undefined;
    } else if(this.searchData.length === 9) {
      this.value9 = this.val;
      this.searchText = undefined;
    } else {
      this.error = "You cannot be enter more then 9 tags";
    }
  }

  removeBtn(value,val){
    debugger
    if(this.searchData.length > 0){
      let index = this.searchData.indexOf(val);
      this.searchData.splice(index, 1)
      if(value === 1){
        this.value1 = undefined;
      } else if(value === 2){
        this.value2 = undefined;
      } else if(value === 3){
        this.value3 = undefined;
      } else if(value === 4){
        this.value4 = undefined;
      } else if(value === 5){
        this.value5 = undefined;
      } else if(value === 6){
        this.value6 = undefined;
      } else if(value === 7){
        this.value7 = undefined;
      } else if(value === 8) {
        this.value8 = undefined;
      } else if(value === 9) {
        this.value9 = undefined;
      }
    }
  }

  changed(value){
    debugger
    this.showChart = value;
    if(this.showChart === true){
      this.getChart(this.urldata1);
    } else {
      this.chart = []
    }

  }


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
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

  ngOnDestroy() {
    // if (this.chart) {
    //   this.AmCharts.destroyChart(this.chart);
    // }
  }

}
