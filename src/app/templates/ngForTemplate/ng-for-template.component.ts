import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-template',
  templateUrl: './ng-for-template.component.html',
  styleUrls: ['./ng-for-template.component.css']
})
export class NgForTemplateComponent {
  items: string[] = [];
  constructor(){
    for(var i = 0; i < 10; i++){
      this.items[i] = "Item " + i
    }
  }
}
