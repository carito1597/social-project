import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  goContact() {
    console.log('asdfa')
    this.router.navigate(['contact']);
  }

  goReportRegister() {
    this.router.navigate(['report-register']);
  }

  goReportList() {
    this.router.navigate(['report-list']);
  }
}
