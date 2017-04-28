import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})

export class NgIfComponent {
  isVisible: boolean = true;

  changeVisible(){
    this.isVisible = !this.isVisible;
  }
}
