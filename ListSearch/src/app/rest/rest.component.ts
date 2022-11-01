
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { observable } from 'rxjs';
import { RestService } from './rest.service';
import { Users } from './users';



@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {

  users:Users[]=[];

  enteredValue: string = '';

  constructor(private rsk:RestService) { 

  }

  ngOnInit(): void {

    this.rsk.getusers().subscribe((response)=>{

      this.users = response;
    })
  }

@Output()
  searchTextchanged : EventEmitter<string> = new EventEmitter<string>


}
