import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  templateUrl: 'ng-styles.component.html',
  styleUrls: ['ng-styles.component.css']
})
export class NgStylesComponent {
  getStyle(){
    let styles = {
      'font-size' : '30px',
      'background-color' : 'red',
      'font-sttyle' : 'italic'
    }
    return styles;
  }
}
