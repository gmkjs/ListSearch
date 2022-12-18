import { Component, OnInit } from '@angular/core';
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
  items: Item []=[
    { id: 1, name: 'Krishna' },
    { id: 2, name: 'goutham' },
    { id: 3, name: 'praveen' }
  ]

  constructor() { }

  ngOnInit(): void {
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
