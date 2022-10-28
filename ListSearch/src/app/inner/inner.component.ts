import { GardService } from '../gard.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
  providers:[GardService]
})


export class InnerComponent implements OnInit {
  @Input() allremarks:any;

  krishap:any;
  public resobj:any=[];

  constructor(private GardService:GardService) { 

  }

  ngOnInit(): void {
    this.servget();
  }

  servget(){

    this.GardService.setapiflat().subscribe(res=>{
      console.log(res.data,'muraliapi');
      this.resobj = res.data;

      // this.krishap = res.map((x:any)=>x);
      // console.log(this.krishap.data);
    })

  }

}
