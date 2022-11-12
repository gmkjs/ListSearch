import { GardService } from '../gard.service';
import { Component, Input, OnInit } from '@angular/core';
import { PostapiService } from '../postapi.service';
import { Observable } from 'rxjs';
import { RestService } from '../rest/rest.service';


@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
  providers:[GardService,PostapiService]
})


export class InnerComponent implements OnInit {
  @Input() allremarks:any;

  krishap:any;
  public resobj:any=[];

  constructor(private GardService:GardService,private supreme:PostapiService,private samantha:RestService) { 

  }

  ngOnInit(): void {
    this.servget();
    this.callpostdata();
  }

  servget(){

    this.GardService.setapiflat().subscribe(res=>{
      console.log(res.data,'muraliapi');
      this.resobj = res.data;

      // this.krishap = res.map((x:any)=>x);
      // console.log(this.krishap.data);
    })

  }

  callpostdata(){

    this.supreme.getPostData().subscribe(resp=>{
      console.log(resp);
    })

  }

  getUserdetails(data:any){

    // console.warn(data,'muralikrishnaaa');
    this.samantha.postusers(data).subscribe((veera)=>{

      console.log(veera);

    })

  }

}
