import { Component } from '@angular/core';
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
    private reportService: ReportsService
  ) {
    this.getReports();
  }

  getReports(){
    this.reportService.getReports()
    .subscribe((data: Report[]) => {
      this.reports = data;
    })
  }
}
