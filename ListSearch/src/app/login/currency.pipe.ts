import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(items: any[], searchTerm: any, searchBy: any) {
    if(!searchTerm){
      return items;
    }
    return items.filter((x)=>{
      const currentItem = x[searchBy];
      return currentItem.toString().toLowerCase().includes(searchTerm.trim())
    })
  }

}
