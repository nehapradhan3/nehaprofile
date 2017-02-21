import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { FlipComponent } from './flip/flip.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { LeadComponent } from './lead/lead.component';

import{EmployeeService} from './employee.service';
import { ImagesComponent } from './images/images.component';
import { SpecificLeadsComponent } from './specific-leads/specific-leads.component';

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

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'leads' ,component:ViewdetailsComponent},
      {path:'notes', component:NotesComponent}
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
