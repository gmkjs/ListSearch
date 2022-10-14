import { Component, OnInit } from '@angular/core';
import { subjectService } from '../subject.service';


@Component({
  selector: 'app-subj',
  templateUrl: './subj.component.html',
  styleUrls: ['./subj.component.scss']
})
export class SubjComponent implements OnInit {

  subjstr: any;

  constructor(private subServ:subjectService) { }

  ngOnInit(){
    this.subj();
  }

  subj(){
    this.subServ.subData.subscribe((res:any)=>{
      console.log(res, 'in subj comp')
      this.subjstr = res;
    })
    
  }

}
