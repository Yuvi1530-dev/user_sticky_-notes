import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CombaineComponent } from './combaine/combaine.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CombaineComponent,
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CombaineComponent,

  ]
})
export class SharedModule { }
