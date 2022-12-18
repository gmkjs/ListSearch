import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostbl]'
})
export class HostblDirective {
@HostBinding('style.color') colorKey = 'yellow';
@HostBinding('style.backgroundColor') bgcolorKey ='red';

@HostListener('mouseenter') onEnter(){
  this.colorKey = 'white';
  this.bgcolorKey = 'blue';

}

@HostListener('mouseleave') onLeave(){
  this.colorKey = 'yellow';
  this.bgcolorKey = 'red';

}
  constructor() { }

}
