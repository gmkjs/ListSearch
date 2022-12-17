import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.scss']
})
export class CarrersComponent implements OnInit {

  public obj:any;

  constructor() { }

  ngOnInit(): void {
  }

  dataList = [
    {
      'Employee' : {
        'Name' : {
          'First' : 'Roy',
          'Last' : 'Agasthyan'
        },
        'Address' : {
          'HouseNo' : 100,
          'State' : 'Kerala',
          'Country' : 'India'
        }
      }
    },
    {
      'Employee' : {
        'Name' : {
          'First' : 'Sam',
          'Last' : 'Thomson'
        },
        'Address' : {
          'HouseNo' : 120,
          'State' : 'Delhi',
          'Country' : 'India'
        }
      }
    }
  ];

  getkeys(obj: {}){
    return Object.keys(obj);
  }

}
