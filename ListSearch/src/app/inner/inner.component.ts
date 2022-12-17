import { GardService } from '../gard.service';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { PostapiService } from '../postapi.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { style } from '@angular/animations';


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
  public formdata:any = [];
  // productname:any;
  // productemail:any;
  

  recform = new FormGroup({
    productname: new FormControl(" "),
    productemail: new FormControl(" "),
  })
  

  constructor(private GardService:GardService,private supreme:PostapiService) { 

  }

  ngOnInit(): void {
    this.servget();
    this.callpostdata();
    this.onsubmit();
  }

  onsubmit() {
    // this.productemail = data.email;
    this.formdata.push(this.recform.value);
    console.log("formdata",this.formdata);
    
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
 

}
