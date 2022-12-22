import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  api_url = environment.api_url + 'reports'
  constructor(
    private http: HttpClient
  ) { }

  getReports(): Observable<Report[]>{
    return this.http.get<Report[]>(this.api_url);
  }

  patch(data: Report){
    return this.http.patch(this.api_url, data);
  }

  postReports(data: Report){
    return this.http.post(this.api_url, data);
  }
}
