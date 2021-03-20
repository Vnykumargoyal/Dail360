import {Component, OnInit, ViewChild,Inject, NgZone, PLATFORM_ID,AfterViewInit,OnDestroy, ElementRef, Input } from '@angular/core';
import {MatSort, MatTableDataSource, Sort} from '@angular/material';
import { interval } from 'rxjs';
import { Chart } from 'chart.js';
import {ApiServiceService} from '../Services/api-service.service';


// import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
export interface PeriodicElement {
  AgentId: string;
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

const ELEMENT_DATA: PeriodicElement[] = [
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

const data = [{TotalLogin: 'Rahul', blockCount: 'Incall', breakCount: '4159', idleCount:'Talk',TotalCalls:'50(0)',incallCount:'8285619174', wrapCount:'00:00:20'}]

@Component({
  selector: 'app-live-moniter',
  templateUrl: './live-moniter.component.html',
  styleUrls: ['./live-moniter.component.css']
})
export class LiveMoniterComponent implements OnInit,OnDestroy,AfterViewInit {
  searchText;
  single: any[];
  @Input() height: boolean;
  @Input() serch: boolean;
  public options: any;
  @ViewChild('myCanvas', {static: true}) canvasRef: ElementRef;
  view: any[] = [];
  data ;
  // = [
  //   { 'name' : "vikas", 'value' : 765 },
  //   {'name' : "ram", 'value' : 123},
  //   {'name' : "shyam", 'value' : 84}
  // ]
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
  // data;
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
  headerData;
  displayedColumns: string[] = [ 'AgentId', 'AgentStatus', 'Extension','ExtStatus','TotalCalls','PhoneNo','Duration','CallType','Campaign','LoginHrs','TalkTime','WrapTime'];
  dataSource;
  sortDir = 1;
  urldata1;
  sortingValue = 0;
  Player= ['Rahul','Prince','Sakti','Vinay','Vikas','Punit'];
  Run= [10,20,22,52,56,20];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort,{ static: true }) sort: MatSort;

  constructor(private apiData : ApiServiceService) {
    // Object.assign(this, { data });
   }

  ngAfterViewInit() {

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

    // this.dataSource = ELEMENT_DATA;
    this.getChart('','',this.urldata1)

  }



  getChart(col,type,urldata1){

    this.apiData.getCallHeadersData(urldata1).subscribe((data)=>{

      this.data = [
          {'name': 'TotalLogin', 'value': data[0].TotalLogin},
          {'name': 'blockCount', 'value':data[0].blockCount},
          {'name': 'breakCount', 'value':data[0].breakCount},
          {'name': 'idleCount', 'value':data[0].idleCount},
          // {'name': 'TotalCalls', 'value':data[0].TotalCalls},
          {'name': 'incallCount', 'value':data[0].incallCount},
          {'name': 'wrapCount', 'value':data[0].wrapCount}
        ]
    })
  }




  callHeader(urldata1){
    this.apiData.getCallHeadersData(urldata1).subscribe((data)=>{
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

  getSortData(col,type,urldata){
    this.apiData.getCallDataWithSort(col,type,urldata).subscribe((data) => {
      this.dataSource = data;
    })
  }



  filterAdded(value) {

    if(typeof(value) === 'string'){
       this.val = value;
    } else {
      this.val = value.currentTarget.value;
    }

    // console.log(this.value1)
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

    this.showChart = value;
    if(this.showChart === true){
      this.getChart('','',this.urldata1);
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
