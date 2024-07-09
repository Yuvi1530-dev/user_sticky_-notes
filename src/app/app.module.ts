import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesAddComponent } from './feature/notes-add/notes-add.component';
import { NotesListComponent } from './feature/notes-list/notes-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureModule } from './feature/feature.module';
import { NotesService } from './core/service/notes.service';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,
    FeatureModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
