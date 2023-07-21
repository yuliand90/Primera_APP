import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BotonesComponent } from './component/botones/botones.component';
import { ObservableComponent } from './components/observable/observable.component';


@NgModule({
  declarations: [
    InputComponent,
    BotonesComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class InputsModule { }
