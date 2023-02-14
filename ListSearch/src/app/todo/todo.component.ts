import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
[x: string]: any;
  
  userList= [];
  datas='';
  userName= '';
  constructor() { }

  ngOnInit(): void {
  }

  getData(value:string){
    if(value !== ""){
    // this.userList.push(value);
    }
    // datas.value = '';
  }

  delete(delme:any){
    this.userList.splice(delme,1);

  }

}
