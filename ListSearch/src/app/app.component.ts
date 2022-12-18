import { Component, ViewChild,ElementRef, ChangeDetectionStrategy,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title:any;

  parentproperty:string ="This data emiting from Parent";

  TotalEmpSal(){
    alert("Total Salary is 100000 from Parent");
  }

}
