import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-template',
  templateUrl: './ng-if-template.component.html',
  styleUrls: ['./ng-if-template.component.css']
})
export class NgIfTemplateComponent  {
  isVisible:boolean = true;
  toogleVisible(){
    this.isVisible = !this.isVisible;
  }
}
