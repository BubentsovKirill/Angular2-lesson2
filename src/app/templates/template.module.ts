import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    NgIfTemplateComponent,
    NgSwitchTemplateComponent,
    NgForTemplateComponent
} from './index';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NgIfTemplateComponent, NgSwitchTemplateComponent, NgForTemplateComponent]
})
export class TemplateModule { }
