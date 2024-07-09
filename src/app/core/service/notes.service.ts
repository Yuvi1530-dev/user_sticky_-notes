import { Injectable } from '@angular/core';
import { NotesList } from "../interface/notes-list.notes";
import { BehaviorSubject, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class NotesService {
  public searchObservable= new BehaviorSubject<any>(null);
  searchText = this.searchObservable.asObservable()
  public filterObserVable= new BehaviorSubject<any>(null);
  filterVal = this.filterObserVable.asObservable()
  constructor() {

   }

  addNotes(data: NotesList) {
    let notesStorage = JSON.parse(localStorage.getItem("notes_data") || "[]");
    let result = new Promise((resolve, reject) => {
      if (notesStorage.length != 0) {
        let notes_list = Object.assign(data, { 'index': notesStorage.length + 1, 'id': this.generateRandomNumber(6) })
        notesStorage.push(notes_list);
        localStorage.setItem('notes_data', JSON.stringify(notesStorage));
      } else {
        let notes_list = Object.assign(data, { 'index': 1, 'id': this.generateRandomNumber(6) })
        localStorage.setItem('notes_data', JSON.stringify([notes_list]));
      }
      return resolve({"status":1,"message":"Notes Added Successfully"})
    })
    return result;
  
  }
  updateNotes(id:any,data:NotesList){
    let notesStorage = JSON.parse(localStorage.getItem("notes_data") || "[]");
    let result = new Promise((resolve, reject) => {
      notesStorage.forEach((element:any,index:number) => {
        if(element.id==id){
          notesStorage[index]['title']=data.title,
          notesStorage[index]['content']=data.content
          notesStorage[index]['category']=data.category
        }
      });
      console.log(notesStorage,"update")
      localStorage.setItem('notes_data', JSON.stringify(notesStorage));
      return resolve({"status":1,"message":"Notes Updated Successfully"})
    })
    return result;
  }
  getNotes() {
    let notesStorage = JSON.parse(localStorage.getItem("notes_data") || "[]");
    return notesStorage.length != 0 ? notesStorage : []
  }
  generateRandomNumber(length: number) {
    let unique_id = '';
    const randomString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomStringLength = randomString.length;
    let count = 0;
    while (count < length) {
      unique_id += randomString.charAt(Math.floor(Math.random() * randomStringLength));
      count += 1;
    }
    return unique_id;
  }
  removeNotes(index: number, id: string) {
    let notesStorage = JSON.parse(localStorage.getItem("notes_data") || "[]");
    return new Promise((resolve, reject) => {
      if (notesStorage.length != 1) {
        notesStorage.splice(notesStorage.findIndex((value: any) => value.id === id), 1);
        localStorage.setItem('notes_data', JSON.stringify(notesStorage));
        resolve({"status":"1"})
      }else{
        resolve({"status":"0"})
      }
    })
    
  }
  notesType(category:string){
    let final_result;
    if(category=='1'){
      final_result={'class':'badge text-bg-danger','type':'Important'} 
    }else if(category=='2'){
      final_result={'class':'badge text-bg-warning','type':'Moderate'} 
    }else if(category=='3'){
      final_result={'class':'badge text-bg-info','type':'Do it later'} 
    }
    return final_result;
    // <span class="badge badge-primary">Primary</span>
  }
  showAlert(message:string,DenyBtn:boolean,cancelBtn:boolean,okay_text:string,cancel_txt:string){
    return new Promise((resolve, reject) => {
      Swal.fire({
        icon:'info',
        title:message,
        showDenyButton: DenyBtn,
        showCancelButton: false,
        confirmButtonText: okay_text,
        denyButtonText: cancel_txt,
        denyButtonColor:'3#ad0808',
        confirmButtonColor :'#228908'
      }).then((result) => {
        if (result.isConfirmed) {
         resolve({"status":1})
        } else if (result.isDenied) {
          resolve({"status":0})
        }
      });
    })
  }
}
