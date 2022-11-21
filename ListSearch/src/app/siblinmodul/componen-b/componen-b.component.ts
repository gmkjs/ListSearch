import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-componen-b',
  templateUrl: './componen-b.component.html',
  styleUrls: ['./componen-b.component.scss']
})
export class ComponenBComponent implements OnInit {

  constructor(private sibserv:SiblingService) { }

  ngOnInit(): void {
    this.sibserv.sendmessage.subscribe((message)=>{
      console.log(message);})

      this.sibserv.sendobject.subscribe((obj)=>{
        console.log(obj);
      })

      this.sibserv.sendarray.subscribe((arr1)=>{
        console.log(arr1);
      })
  }

}
