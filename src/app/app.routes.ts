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
    NgClassComponent
} from './build-in-derectives/index';

export const routes = [
    {path: 'interpolation', component : InterpolationComponent },
    {path: 'propertyBinding', component : PropertyBindingComponent },
    {path: 'eventBinding', component : EventBindingComponent },
    {path: 'attrebuteBinding', component : AttrebuteBindingComponent },
    {path: 'classBinding', component : ClassBindingComponent},
    {path: 'styleBinding', component : StyleBindingComponent},
    {path: 'ngModel', component : NgModelComponent },
    {path: 'ngClass', component: NgClassComponent},


    {path: '', redirectTo : 'interpolation', pathMatch: 'full'}
];