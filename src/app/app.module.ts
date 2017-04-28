import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BindingModule } from './binding/index';
import { TwoWayBindingModule } from "./two-way-binding/index";
import { BuildInDerectivesModule } from './build-in-derectives/index';
import { TemplateModule } from './templates/index';
import { routes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BindingModule,
    TwoWayBindingModule,
    BuildInDerectivesModule,
    TemplateModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
