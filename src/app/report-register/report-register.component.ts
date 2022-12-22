import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Report } from '../models/report';
import { ReportsService } from '../services/reports.service';
const ZOOM = 16;

@Component({
  selector: 'app-report-register',
  templateUrl: './report-register.component.html',
  styleUrls: ['./report-register.component.css']
})
export class ReportRegisterComponent implements OnInit {
  center: google.maps.LatLngLiteral = {
    lat: -17.373180,
    lng: -66.147378
  };
  zoom = ZOOM;
  marker = {
    position: {
      lat: -17.373180,
      lng: -66.147378
    },
  }
  report: Report = new Report();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.report.img_url = "https://quintafuerzamx.s3.us-east-2.amazonaws.com/Leopard/uploads/2022/05/fuertes-vientos-cdmx-caida-de-arboles-y-servicio-lento-en-cablebus-162456-696x392.jpg"
    this.reportService.postReports(this.report)
    .subscribe(data =>{
      this.goReportList();
    })
  }

  onChange(event: any) { }


  clickOnMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.marker.position = (event.latLng.toJSON());
      this.report.latitude = this.marker.position.lat.toString();
      this.report.longitude = this.marker.position.lng.toString();
    }
  }

  goContact() {
    console.log('asdfa')
    this.router.navigate(['contact']);
  }

  goReportList() {
    this.router.navigate(['report-list']);
  }
}
