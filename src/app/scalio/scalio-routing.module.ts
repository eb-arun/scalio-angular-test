import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScalioComponent } from './scalio.component';

const routes: Routes = [{
  path:'', component:ScalioComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScalioRoutingModule { }
