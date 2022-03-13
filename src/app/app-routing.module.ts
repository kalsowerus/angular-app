import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddbookComponent} from "./addbook/addbook.component";
import {ShowbooksComponent} from "./showbooks/showbooks.component";

const routes: Routes = [
  { path: 'addbook', component: AddbookComponent },
  { path: 'showbooks', component: ShowbooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
