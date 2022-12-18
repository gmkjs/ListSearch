import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-componen-a',
  templateUrl: './componen-a.component.html',
  styleUrls: ['./componen-a.component.scss']
})
export class ComponenAComponent implements OnInit {

  messageFromCompA = "Hello Angular, I am From CompA";
  objectFromCompA = {
    fname : "Murali",
    lname : "Krishna"
  };
  arrayFromCompA = ["orange","grape"];

  constructor(private siblliserv:SiblingService) { }

  ngOnInit(): void {

    // this.sendinfotocompB(); 
  }

  sendinfotocompB(){
    this.siblliserv.communicatemessage(this.messageFromCompA);
  }

  sendobjecttocompB(){
    this.siblliserv.communicateobject(this.objectFromCompA);
  }

  sendarraytocompB(){
    this.siblliserv.communicatearry(this.arrayFromCompA);
  }

}
