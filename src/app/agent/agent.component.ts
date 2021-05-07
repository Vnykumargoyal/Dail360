import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  opened: boolean = false;
  transferModal;
  breakModal;
  conferenceModal;
  dialModal;
  dailNum = '';

  constructor() { }

  ngOnInit() {
    console.log(document.getElementById('sidenav-collapse-main'))
  }


  _toggleSidebar() {
    this.opened = !this.opened;
  }

  transferModalHide(){
    this.transferModal = false;
  }

  opentransferModal(){
    this.transferModal = true;
  }

  breakModalHide(){
    this.breakModal = false;
  }

  openbreakModal(){
    this.breakModal = true;
  }

  conferenceModalHide(){
    this.conferenceModal = false;
  }

  openconferenceModal(){
    this.conferenceModal = true;
  }

  dialModalHide(){
    this.dialModal = false;
  }

  opendialModal(){
    this.dialModal = true;
  }

  clickOnNumber(val){
    debugger
    if(this.dailNum.length < 10){
      if(this.dailNum !== ''){
        this.dailNum = this.dailNum + val;
      } else{
        this.dailNum = val;
      }
    }

  }



}
