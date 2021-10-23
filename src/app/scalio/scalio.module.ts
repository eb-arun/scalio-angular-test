import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScalioRoutingModule } from './scalio-routing.module';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ScalioComponent } from './scalio.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchComponent,
    ResultsComponent,
    ScalioComponent
  ],
  imports: [
    CommonModule,
    ScalioRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ScalioModule { }
