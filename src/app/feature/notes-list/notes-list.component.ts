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

  constructor(public service: NotesService, private toaster: ToasterService,private router : Router) { }
  ngOnInit(): void {
    this.listNotes = this.service.getNotes();
  }
  hideMaximunWords(content: string) {
    return content.substring(0, 100);
  }
  searchByTitle(event: any) {
    this.service.searchObservable.next(event.target.value)
  }
  selectFilter(event: any) {

  }

  deleteNotes(index: number, id: string) {
    console.log(id, "id");
    this.service.showAlert("Are you sure you want delete this notes!", true, true, "Done", "Cancel").then((result: any) => {
      if (result.status == 1) {
        this.service.removeNotes(index, id).then((result: any) => {
          if (result.status == '1') {
            this.listNotes = this.service.getNotes();
            this.toaster.getToastMessage('Success','success',"Notes Removed Successfully");
          }
        })
      }
    })
  }
  EditNotes(index: number, id: any) {
this.router.navigate([`notes_edit/${id}`])
  }

}
