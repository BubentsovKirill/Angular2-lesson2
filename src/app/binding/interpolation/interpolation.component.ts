import { Component } from '@angular/core';

@Component({
  selector: 'fa-interpolation',
  templateUrl: './interpolation.component.html',
  styles: []
})
export class InterpolationComponent  {

  firstName: string;
  lastName: string;

  constructor() {
    this.firstName = 'Ivan';
    this.lastName = 'Ivanov';
  }

  getFullName():string{
    return this.firstName + ' ' + this.lastName
  }
}
