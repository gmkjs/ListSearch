import { Component, OnInit } from '@angular/core';
import { GetmethService } from '../getmeth.service';


@Component({
  selector: 'app-getcomp',
  templateUrl: './getcomp.component.html',
  styleUrls: ['./getcomp.component.scss'],
  providers: [GetmethService]
})
export class GetcompComponent implements OnInit {

  name = 'Angular';
  res: any;
  purple:any= [];
  authordata=[];

  constructor(public elm:GetmethService) {  }

  ngOnInit(): void {
    this.semk();
  }

  semk(){
    this.elm.apiget().subscribe((respon)=>{
      this.purple = respon.data;
      console.log(this.purple,'respon');
    })
  }

  books: any = [
    { author: 'Murali', title: 'VGS' },
    { author: 'Krishna', title: 'PBK' },
    { author: 'Kumar', title: 'SVK' },
    { author: 'Murali', title: 'SDG' },
  ];

  // console.log(res);

  // console.warn(res);

  

  murali() {

      // if(this.books.filter((element:any) =>element.author==='Murali')){

        // this.books = element.author;
        // console.log('praveen gannnnnn',this.books);
        // return this.books;
        this.books.forEach((value:any)=>{

          if(value.author==="Murali"){
            this.authordata = value;
            // console.log(this.authordata,'praaaaav');
            this.books = this.authordata;
            // this.books = JSON.stringify(this.books);
            this.books.push(this.authordata);
            console.log(this.res,'oooorange');
            
            // this.books.forEach((authorvalue:any)=>{
            //   authorvalue.author = this.authordata;
            //   console.log(authorvalue.author);
            // })
          }

        });

      // }



    // this.res = this.books.forEach((element:any) => {

    //   if (element.hasOwnProperty('author')==="Murali") {
    //     console.log('praveen');
    //    return element.author;
    //   }
    // });

  }

}
