import {
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    AttrebuteBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent
} from './binding/index';

import{
    NgModelComponent
} from './two-way-binding/index';

import{
    NgClassComponent,
    NgStylesComponent,
    NgIfComponent,
    NgSwtichComponent,
    NgForComponent
} from './build-in-derectives/index';

import {
    NgIfTemplateComponent,
    NgSwitchTemplateComponent,
    NgForTemplateComponent
} from './templates/index';

export const routes = [
    {path: 'interpolation', component : InterpolationComponent },
    {path: 'propertyBinding', component : PropertyBindingComponent },
    {path: 'eventBinding', component : EventBindingComponent },
    {path: 'attrebuteBinding', component : AttrebuteBindingComponent },
    {path: 'classBinding', component : ClassBindingComponent},
    {path: 'styleBinding', component : StyleBindingComponent},
    {path: 'ngModel', component : NgModelComponent },
    {path: 'ngClass', component: NgClassComponent},
    {path: 'ngStyle', component: NgStylesComponent},
    {path: 'ngIf', component: NgIfComponent},
    {path: 'ngSwitch', component: NgSwtichComponent},
    {path: 'ngFor', component: NgForComponent},
    {path: 'ngIfTemplate', component: NgIfTemplateComponent},
    {path: 'ngSwitchTemplate', component: NgSwitchTemplateComponent},
    {path: 'ngForTemplate', component: NgForTemplateComponent},

    {path: '', redirectTo : 'interpolation', pathMatch: 'full'}
];