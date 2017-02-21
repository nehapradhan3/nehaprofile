import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewdetailsComponent} from './viewdetails/viewdetails.component';
import {NotesComponent} from './notes/notes.component';
const routes: Routes = [
  {path:'leads', component:ViewdetailsComponent},
  {path:'notes', component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents=[ViewdetailsComponent, NotesComponent] 
