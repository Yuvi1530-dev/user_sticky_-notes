import { Pipe, PipeTransform } from '@angular/core';
import { NotesService,NotesList} from "../service";
import { debounceTime, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
interface Notes {
  title: string;
  content: string;
  category: string;
}
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  constructor(private service: NotesService) {}
  transform(value: any[], data: string, searchKey: string,type:string) {
    if (!data || data.trim() === '') {
      return of(value);
    }
    return this.service.searchText.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((searchText: string) => {
        return value.filter(item => {
          const currentItem = item[searchKey];
          if(currentItem.toString().toLowerCase().includes(searchText.trim().toLowerCase()) && type && item.category==type){
            return currentItem.toString().toLowerCase().includes(searchText.trim().toLowerCase());
          }
          if(currentItem.toString().toLowerCase().includes(searchText.trim().toLowerCase()) && !type){
            return currentItem.toString().toLowerCase().includes(searchText.trim().toLowerCase());
          }
        });
      })
    )
  }
}
