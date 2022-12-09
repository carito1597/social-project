import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-register',
  templateUrl: './report-register.component.html',
  styleUrls: ['./report-register.component.css']
})
export class ReportRegisterComponent implements OnInit {
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: -17.373180, 
    lng: -66.147378
  };
  zoom = 16;
  marker = {
    position: { lat: -17.373180, 
      lng: -66.147378 },
 }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { }

  onChange(event: any) { }


  clickOnMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null){
      // this.center = (event.latLng.toJSON());
      this.marker.position = (event.latLng.toJSON());
      console.log(this.marker)
    } 
  }
}
