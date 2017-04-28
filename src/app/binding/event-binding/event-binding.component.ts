import { Component} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  templateUrl: './event-binding.component.html',
  styles: []
})
export class EventBindingComponent {

  onSave(){
    console.log('Button work, event was')
  }

  testEvent(event){
      for(let prop in event){
          console.log('prop = ' + event[prop])
      }
  }
}
