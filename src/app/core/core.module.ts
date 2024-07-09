import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService } from './service/notes.service';
import { SearchPipe } from './custom_pipe/search.pipe';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    SearchPipe
  ], 
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ], providers: [NotesService],
  exports: [SearchPipe]
})
export class CoreModule { }
