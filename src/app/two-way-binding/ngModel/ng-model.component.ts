import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent {
    isValueX: number = 0;
    isValueY: number = 0;
    result: number;

    calculation(){
        this.result = +this.isValueX + +this.isValueY;
    }

    reset(){
        this.isValueX = this.isValueY =0;
        this.result = undefined;
    }

}
