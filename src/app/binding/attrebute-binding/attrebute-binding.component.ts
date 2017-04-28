import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attrebute-binding',
  templateUrl: './attrebute-binding.component.html',
  styles: []
})
export class AttrebuteBindingComponent implements OnInit {

  value:number = 10;

  increment(){
    this.value++;
  }

  decrement(){
    this.value--;
  }

  constructor() { }

  ngOnInit() {
  }

}
