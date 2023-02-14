import { Component, OnInit } from '@angular/core';
import { RresolveService } from '../rresolve.service';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.scss']
})
export class CarrersComponent implements OnInit {

  public obj:any;
  dataShow:any= [];

  constructor(public crrsrvc:RresolveService) { }

  ngOnInit(): void {
    this.showData();
    // console.log(this.dataList,'datalist');
    this.dataList.forEach
    // this.dataList.forEach(element)
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
    // console.log(obj,'object data');
    return Object.keys(obj);
  }

 showData(){
  this.crrsrvc.getUpload().subscribe(res=>{
    this.dataShow = [];
    this.dataShow.push(res.data)
    console.log(this.dataShow,res, 'hhhh')
  })
 }

}
