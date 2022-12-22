import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from '../models/report';
import { ReportsService } from '../services/reports.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent {

  reports: Report[] = [];

  constructor(
    private reportService: ReportsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getReports();
  }

  getReports(){
    this.reportService.getReports()
    .subscribe((data: Report[]) => {
      this.reports = data;
    })
  }

  goContact() {
    this.router.navigate(['contact']);
  }

  goReportRegister() {
    this.router.navigate(['report-register']);
  }

  goReportList() {
    this.router.navigate(['report-list']);
  }
}
