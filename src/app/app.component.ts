import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-project';

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
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
}
