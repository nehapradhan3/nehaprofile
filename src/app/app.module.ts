import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { FlipComponent } from './flip/flip.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { LeadComponent } from './lead/lead.component';

import{EmployeeService} from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TodosComponent,
    FlipComponent,
    ViewdetailsComponent,
    LeadComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
