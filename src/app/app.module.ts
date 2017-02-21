import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { FlipComponent } from './flip/flip.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { LeadComponent } from './lead/lead.component';

import{EmployeeService} from './employee.service';
import { ImagesComponent } from './images/images.component';
import { SpecificLeadsComponent } from './specific-leads/specific-leads.component';
import {routingComponents} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TodosComponent,
    FlipComponent,
    ViewdetailsComponent,
    LeadComponent,
    ImagesComponent,
    SpecificLeadsComponent,
    routingComponents,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
