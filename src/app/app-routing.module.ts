import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureRoutingModule } from './feature/feature-routing.module';

const routes: Routes = [{
  path:'',
  loadChildren:() => import('./feature/feature-routing.module').then(mod => mod.FeatureRoutingModule)
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
