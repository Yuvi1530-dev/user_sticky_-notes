import { Component, OnInit } from '@angular/core';

import { NotesList, NotesService, ToasterService } from "../../core/service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  listNotes: NotesList[] = []
  searchText: string = "";
  filterType: string = ""
  firstDragedID: string = ""
  dragStartIndex: number = 0
  dargedIndex: number = 0;
  placedIndex: number = 0;
  constructor(public service: NotesService, private toaster: ToasterService, private router: Router) { }
  ngOnInit(): void {
    this.listNotes = this.service.getNotes();
  }
  hideMaximunWords(content: string) {
    return content.substring(0, 100);
  }
  searchByTitle(event: any) {
    this.service.searchObservable.next(event.target.value)
  }
  selectFilter(event: any) {}

  deleteNotes(index: number, id: string) {
    console.log(id, "id");
    this.service.showAlert("Are you sure you want delete this notes!", true, true, "Done", "Cancel").then((result: any) => {
      if (result.status == 1) {
        this.service.removeNotes(index, id).then((result: any) => {
          if (result.status == '1') {
            this.listNotes = this.service.getNotes();
            this.toaster.getToastMessage('Success', 'success', "Notes Removed Successfully");
          }
        })
      }
    })
  }
  EditNotes(index: number, id: any) {
    this.router.navigate([`notes_edit/${id}`])
  }

  onDragStart(event: DragEvent, index: number, dragedFirstId: string, dragedIndex: any) {
    this.firstDragedID = dragedFirstId;
    this.dragStartIndex = index;
    this.dargedIndex = dragedIndex;
  }

  onDragOver(event: DragEvent, index: number, id: string, Dropindex: any) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, index: number, endId: string, placedIn: any) {
    event.preventDefault();
    const draggedItem = this.listNotes[this.dragStartIndex];
    this.listNotes[this.dragStartIndex]['index'] = placedIn;
    this.listNotes[index]['index'] = this.dargedIndex;
    this.listNotes.splice(this.dragStartIndex, 1);
    this.listNotes.splice(index, 0, draggedItem);
    localStorage.setItem('notes_data', JSON.stringify(this.listNotes) || '[]');
    this.toaster.getToastMessage("Success","success","Position modified successfully")
  }
  getValues(data:any){
console.log(data,"dat")
  }

}
