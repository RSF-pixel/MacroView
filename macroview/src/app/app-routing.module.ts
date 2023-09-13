import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalitycsComponent } from './analitycs/analitycs.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'analitycs', component: AnalitycsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
