import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesAddComponent } from './notes-add/notes-add.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesEditComponent } from './notes-edit/notes-edit.component';



@NgModule({
  declarations: [NotesAddComponent,NotesListComponent, NotesEditComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule
    
  ],
  exports:[NotesAddComponent,NotesListComponent]
})
export class FeatureModule { }
