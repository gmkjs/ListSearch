import { GardService } from '../gard.service';
import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { PostapiService } from '../postapi.service';
import { interval, Observable } from 'rxjs';
import { RestService } from '../rest/rest.service';



@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss'],
  providers:[GardService,PostapiService]
})


export class InnerComponent implements OnInit {
  @Input() allremarks:any;
  myinterval = interval(2000);
  usersinfointerval = interval(5000);
  valusers:any;

  krishap:any;
  public resobj:any=[];

  constructor(private GardService:GardService,private supreme:PostapiService,private pserv:RestService) { 
  

  }

  ngOnInit(): void {
    this.servget();
    this.callpostdata();
    
    this.usersinfointerval.subscribe(x => {
      // console.log("called user service..");
      this.intervalmaths();

    })
  }

  // ngDoCheck(){
  //   this.intervalmaths();
  //   console.log('ngdocheck');
  // }

  servget(){

    this.GardService.setapiflat().subscribe(res=>{
      console.log(res.data,'muraliapi');
      this.resobj = res.data;

      // this.krishap = res.map((x:any)=>x);
      // console.log(this.krishap.data);
    })

  }


  postUser(data:any){
// console.warn(data,'hhhh');
this.pserv.saveUsers(data).subscribe((resp:any)=>{
  console.log(resp);
})

  }

  callpostdata(){

    this.supreme.getPostData().subscribe(resp=>{
      console.log(resp);
    })

  }

  getUserdetails(data:any){
    // console.warn(data,'muralikrishnaaa');
    this.pserv.postusers(data).subscribe((veera:any)=>{
      console.log(veera);

    })

  }

  kumar(){
    alert("Your alert is working");
    this.myinterval.subscribe((x)=>{
      console.log("Hello "+ x);
    })
  }

  intervalmaths(){
    this.pserv.intervalusers().subscribe((abc:any)=>{
      this.valusers = abc;
    })
  }

}
