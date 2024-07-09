import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesAddComponent } from './feature/notes-add/notes-add.component';
import { NotesListComponent } from './feature/notes-list/notes-list.component';
const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
