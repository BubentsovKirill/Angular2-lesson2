import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  InterpolationComponent,
  PropertyBindingComponent,
  EventBindingComponent,
  AttrebuteBindingComponent,
  ClassBindingComponent,
  StyleBindingComponent
} from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    AttrebuteBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent
  ]
})
export class BindingModule { }
