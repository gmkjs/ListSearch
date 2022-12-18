import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit {
  
  // myvariable:string="Murali";

  // @ViewChild('btn',{static:true}) myvariable : ElementRef;


  constructor() { }



  ngOnInit(): void {
  }

  // ngAfterViewInit(){
  //   debugger;

  //   console.log(this.myvariable.nativeElement);
  //   this.myvariable.nativeElement.style.color="red";
  // }




}
