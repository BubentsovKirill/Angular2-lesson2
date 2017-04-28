import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  allClass:string = 'borderClass fontClass colorClass';
  currentClass:string = '';

  isBorderClass: boolean = true;
  isFontClass: boolean = false;
  isColorClass: boolean = true;

  toggleClass(){
    if(this.currentClass == ''){
      this.currentClass = this.allClass;
    }
    else{
      this.currentClass = '';
    }
  }

  showAlert(){
      alert('now class will be change');
      this.isBorderClass = !this.isBorderClass;
      this.isColorClass = !this.isColorClass;
      this.isFontClass= !this.isFontClass;
  }


  constructor() { }

  ngOnInit() {
  }

}
