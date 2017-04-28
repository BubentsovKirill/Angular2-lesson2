import { Component } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  templateUrl: './property-binding.component.html',
  styles: []
})
export class PropertyBindingComponent {
    srcImg: string = 'https://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg';
    titleImg: string = 'some text for title';
    flag: boolean = true;
    changeFlag(){
        this.flag = !this.flag;
    }

}
