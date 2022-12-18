import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetapService } from '../getap.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  krishh:any;

  constructor(public rtr:Router, private goutham:ActivatedRoute, private cmk:GetapService) {

    this.getapi2();
   }

  logoutuser(){

    this.rtr.navigate(["login"]);
    // localStorage.clear();
}

  samanta(){
  
  }

  getapi2(){
    this.cmk.getapi().subscribe((resp:any)=>{
      this.krishh = resp;
      console.log(this.krishh);

    })
    
  }

  ngOnInit(): void {
    this.goutham.queryParams.subscribe((x)=>{console.log(x);

      var yourname = x["yourname"];
      console.log("yourname is"+ yourname);
      var yourcount = x["yourcount"];
      console.log("yourcount is"+ yourcount);
    
    });
  }

}
