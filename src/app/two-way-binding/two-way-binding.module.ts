import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModelComponent} from './index';




@NgModule({
  imports: [
    CommonModule,
      FormsModule
  ],
  declarations: [NgModelComponent]
})

export class TwoWayBindingModule { }
