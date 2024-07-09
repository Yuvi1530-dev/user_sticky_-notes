import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router'
import { NotesList, NotesService, ToasterService } from "../../core/service";
@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {
  editNotes !: FormGroup;
  NotesDetails!: NotesList;
  submit : boolean =false;
  constructor(private router: ActivatedRoute, private service: NotesService, private toaster: ToasterService,private fb : FormBuilder,private navigate : Router) {
    this.router.snapshot.paramMap.get('id');
    this.editNotes = this.fb.group({
      title: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(100)]],
      category: ['', Validators.required]
    })
  }
  ngOnInit(): void { 
    let notesDetails = this.service.getNotes();
    notesDetails.forEach((element:any) => {
      if(this.router.snapshot.paramMap.get('id')==element.id){
        this.NotesDetails= element
      }
    });
  }
  get edit(): { [key: string]: AbstractControl } {
    return this.editNotes.controls
  }

  updateForm() {
    this.submit = true;
    if (this.editNotes.valid) {
      let notesValues = Object.assign({}, this.editNotes.value)
      this.submit = false;
      let addNotes = {
        title: notesValues.title,
        content: notesValues.content,
        category: notesValues.category
      }
      this.service.updateNotes(this.router.snapshot.paramMap.get('id'),addNotes).then((response: any) => {
        if (response.status == 1) {
          this.toaster.getToastMessage("Sucess", "success", response.message);
        this.navigate.navigate(['notes_list'])
        }
      })
    }
  }
}
