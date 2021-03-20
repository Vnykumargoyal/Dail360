import { Component, OnInit} from '@angular/core';
import {ApiServiceService} from './Services/api-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dail360';

  constructor(private apiData : ApiServiceService) { }

  ngOnInit() {
    // this.apiData.getCallData().subscribe((data) => {
    //
    //   console.log('Hi Data',data )
    // })
  }
}
