import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgClassComponent,
  NgStylesComponent,
  NgIfComponent,
  NgSwtichComponent,
  NgForComponent
} from './index';





@NgModule({
  imports: [
    CommonModule,
      FormsModule
  ],
  declarations: [
      NgClassComponent,
      NgStylesComponent,
      NgIfComponent,
      NgSwtichComponent,
      NgForComponent
  ]
})
export class BuildInDerectivesModule { }
