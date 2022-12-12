import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ){}

  goContact(){
    console.log('asdfa')
    this.router.navigate(['contact']);
  }

  goReportRegister(){
    this.router.navigate(['report-register']);
  }

  goReportList(){
    this.router.navigate(['report-list']);
  }
}
