import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public rtr:Router, private goutham:ActivatedRoute) { }

  logoutuser(){

    this.rtr.navigate(["login"]);
    // localStorage.clear();

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
