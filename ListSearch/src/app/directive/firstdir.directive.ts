import { Directive,ElementRef,HostBinding,HostListener,OnInit } from '@angular/core';

@Directive({
  selector: '[appFirstdir]'
})
export class FirstdirDirective implements OnInit {

  @HostBinding('style.backgroundColor') color: string | undefined;
  @HostListener('mouseenter') onEnter(){
    this.color="blue";
  }
  @HostListener('mouseleave') onLeave(){
    this.color="red";
  }

  constructor(private elemref:ElementRef) { 

  }

  ngOnInit() {

    // this.elemref.nativeElement.style.backgroundColor = 'green';
    this.color = "yellow";
    
  }

}
