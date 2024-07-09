import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesAddComponent } from './notes-add/notes-add.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { CombaineComponent } from '../shared/combaine/combaine.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';

const routes: Routes = [
  {
    path:'',
    component:CombaineComponent,
    children:[
    {  
      path:'',
      component :NotesAddComponent
    }
    ]
  },{
    path:'',
    component :CombaineComponent,
    children:[
      {  
        path:'notes_list',
        pathMatch :'full',
        component :NotesListComponent
      }
      ]
  },
  {
    path:'',
    component :CombaineComponent,
    children:[
      {  
        path:'notes_edit/:id',
        pathMatch :'full',
        component :NotesEditComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
