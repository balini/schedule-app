import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Schedule, Session } from 'src/app/models/schedule';
import { SessionService } from './session.service';

@Component({
  selector: 'session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit, AfterViewChecked {

  schedule: Schedule[] = [];
  firstClick: boolean = true;
  clicked: boolean = false;
  clickButton: string = 'MORE';
  clickedButtonId: string = '';
  
  constructor (private sessionService: SessionService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getSchedule();
  }

  ngAfterViewChecked():void {
    this.setId('.clickButton');
    this.setId('.columnItens');
    this.cd.detectChanges();
  }

  getSchedule(): void {
    this.sessionService.getSchedule().subscribe(data => {
      this.schedule = data;
    });
  }

  onClick(event: any): void {
    let idAttr = event.target.attributes.id;
    let idValue = idAttr.nodeValue;
    this.clickedButtonId = idValue;
    console.log(this.clickedButtonId);

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

  setId(element: string): void {
    let targetElements = document.querySelectorAll(`${element}`);

      targetElements.forEach((element, index) => {
        element.setAttribute('id', `${index}`)
      }); 
  }

}
