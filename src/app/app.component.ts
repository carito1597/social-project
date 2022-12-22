import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-project';

  constructor(
    private router: Router 
  ) { }

  goContact(){
    this.router.navigate(['contact']);
  }

  goReportList(){
    this.router.navigate(['report-list']);
  }

  goReportRegister(){
    this.router.navigate(['report-register']);
  }

  show:boolean = false;

  toggleCollapse() {
    this.show = !this.show
  }
}
