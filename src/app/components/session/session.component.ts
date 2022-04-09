import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Schedule, Session } from 'src/app/models/schedule';
import { SessionService } from './session.service';

@Component({
  selector: 'session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  schedule: Schedule[] = [];
  firstClick: boolean = true;
  clicked: boolean = false;
  clickButton: string = 'MORE';
  
  constructor (private sessionService: SessionService) {}

  ngOnInit(): void {
    this.getSchedule();
  }

  getSchedule(): void {
    this.sessionService.getSchedule().subscribe(data => {
      this.schedule = data;
    });
  }

  onClick(): void {
    if (this.firstClick) {
      if (!this.clicked) {
        this.clicked = true;
        this.firstClick = false;
        this.clickButton = 'LESS';
      }
    } else {
      if (this.clicked) {
        this.clickButton = 'MORE';
        this.clicked = false;
      } else {
        this.clickButton = 'LESS';
        this.clicked = true;
      }
    }
  }

}
