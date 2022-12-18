import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-ng4-trackby',
  templateUrl: './ng4-trackby.component.html',
  styleUrls: ['./ng4-trackby.component.scss']
})
export class Ng4TrackbyComponent implements OnInit {
public usersdata: any= [];



  items: Item []=[
    { id: 1, name: 'Krishna' },
    { id: 2, name: 'goutham' },
    { id: 3, name: 'praveen' }
  ]

  constructor(private routerslv: ActivatedRoute) { }

  ngOnInit(): void {

    this.usersdata = this.routerslv.snapshot.data['users'].data;

    console.log(this.usersdata,'yyy')
  }
addItem(){
  this.items = [

    { id: 1, name: 'Krishna' },
    { id: 2, name: 'goutham' },
    { id: 3, name: 'praveen' },
    {id: 4, name: 'mohan'},
    {id: 5, name: 'murali'}
    
  ]
}

  trackBycheck(item: Item){
      return item.id;
  }



}
