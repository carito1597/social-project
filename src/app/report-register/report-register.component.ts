import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-register',
  templateUrl: './report-register.component.html',
  styleUrls: ['./report-register.component.css']
})
export class ReportRegisterComponent implements OnInit {

  checkoutForm: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){}

  onChange(event: any){}
}
