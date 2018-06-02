import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'busca'})
export class BuscaPipe implements PipeTransform {
  transform(value: any[], key: any) {
    var array : any[] = [];
    var i = 0;
    if(key != null){
      for(let v in value){
        if(value[v].displayName.toLowerCase().indexOf(key) > -1)
          array[i++] = value[v];
      }
  
      value = array;
      console.log(value.length);
    }
    return value;
  }
}