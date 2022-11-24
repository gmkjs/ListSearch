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
  isMobileView:any;
  isLoaded:any;

  constructor(public rstsrv:RestService, ) { }

  ngOnInit() {
    this.getUserData()
    this.isMobileView = window.innerWidth < 576;
  }


  getUserData() {
    this.rstsrv.getList().subscribe((res) => {
      this.listArr = res;

      console.log(res);
      this.isLoaded = true;
    });
  }

  bret(){
    this.listArr.array.filter((ele: any) => {
      return ele.username ==='Bret'
    }).push()

  
console.log(this.listArr, '');
  }

}
