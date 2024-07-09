import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { NotesService, NotesList, ToasterService } from "../../core/service";
@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent implements OnInit {
  notesAdd!: FormGroup;
  submit: boolean = false;
  constructor(private fb: FormBuilder, private service: NotesService, private toaster: ToasterService) {
    this.notesAdd = this.fb.group({
      title: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(100)]],
      category: ['', Validators.required]
    })
  }
  ngOnInit(): void { }
  get f(): { [key: string]: AbstractControl } {
    return this.notesAdd.controls
  }

  submitForm() {
    this.submit = true;
    if (this.notesAdd.valid) {
      let notesValues = Object.assign({}, this.notesAdd.value)
      this.submit = false;
      let addNotes = {
        title: notesValues.title,
        content: notesValues.content,
        category: notesValues.category
      }
      this.service.addNotes(addNotes).then((response: any) => {
        if (response.status == 1) {
          this.toaster.getToastMessage("Sucess", "success", response.message)
        }
      })
    }
  }
}
