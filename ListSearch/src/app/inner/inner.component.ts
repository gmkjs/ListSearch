import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss']
})
export class InnerComponent implements OnInit {
  @Input() allremarks:any;

  constructor() { }

  ngOnInit(): void {
  }

}
