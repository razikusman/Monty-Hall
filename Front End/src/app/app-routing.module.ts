import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontyHalldashBoardComponent } from './Monty-Hall-DashBoard/Monty-Hall-dashBoard.component';

const routes: Routes = [
  // Other routes...
  { path: '', component: MontyHalldashBoardComponent }, // Define a route for your component
  { path: 'dash-board', component: MontyHalldashBoardComponent }, // Define a route for your component

  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
