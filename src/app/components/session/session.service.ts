import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  url:string = 'http://localhost:3000/schedule'

  constructor(private http: HttpClient) { }

  getSchedule():Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.url);
  }
}
