import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddformComponent } from './addform/addform.component';
import { FormsubComponent } from './formsub/formsub.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addform', component: AddformComponent },
  { path: 'formsubmit', component: FormsubComponent}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
