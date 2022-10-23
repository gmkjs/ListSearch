import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appFirstdir]'
})
export class FirstdirDirective implements OnInit {

  constructor(private elemref:ElementRef) { 

  }

  ngOnInit() {

    this.elemref.nativeElement.style.backgroundColor = 'green';
    
  }

}
