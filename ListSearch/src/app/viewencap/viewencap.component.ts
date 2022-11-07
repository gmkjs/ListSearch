import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewencap',
  templateUrl: './viewencap.component.html',
  styleUrls: ['./viewencap.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewencapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
