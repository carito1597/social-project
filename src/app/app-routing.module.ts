import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ReportListComponent } from './report-list/report-list.component';
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
  },
  {
    path: 'report-list',
    component: ReportListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
