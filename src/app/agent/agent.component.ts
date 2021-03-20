import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(document.getElementById('sidenav-collapse-main'))
  }

  openNav() {
    document.getElementById("sidenav-collapse-main").style.width = "250px";
    document.getElementById("sidenav-main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("sidenav-collapse-main").style.width = "0";
    document.getElementById("sidenav-main").style.marginLeft= "0";
  }

}
