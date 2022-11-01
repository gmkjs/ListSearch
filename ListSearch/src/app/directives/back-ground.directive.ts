import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackGround]'
})
export class BackGroundDirective implements OnInit{

  constructor(private ele: ElementRef) {
    this.ele = ele;
   }

   ngOnInit(){

    this.ele.nativeElement.style.backgroundColor = 'blue';
   }

}
