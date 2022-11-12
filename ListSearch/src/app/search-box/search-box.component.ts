import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest/rest.service';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  listArr:any;
  searchText=''
  x=[];

  constructor(public rstsrv:RestService) { }

  ngOnInit() {
    this.getUserData()
  }

  getUserData() {
    this.rstsrv.getList().subscribe((res) => {
      this.listArr = res;

      console.log(res);
    });
  }

  bret(){
    this.listArr.array.filter((ele: any) => {
      return ele.username ==='Bret'
    }).push()

  
console.log(this.listArr, '');
  }

}
