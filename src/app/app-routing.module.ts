import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportRegisterComponent } from './report-register/report-register.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'report-register',
    pathMatch: 'full'
  },
  {
    path: 'report-register',
    component: ReportRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
