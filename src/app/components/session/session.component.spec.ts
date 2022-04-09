import { SessionService } from './session.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionComponent } from './session.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SessionComponent', () => {
  let component: SessionComponent;
  let fixture: ComponentFixture<SessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [SessionService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to getSchedule', () => {
    const mySpy = spyOn(component, 'getSchedule');

    fixture.componentInstance.getSchedule();
    fixture.detectChanges();

    expect(mySpy).toHaveBeenCalled();
   });

   it('should check method onClick behaviour on first click', () => {
    fixture.componentInstance.onClick();
    fixture.detectChanges();
    expect(fixture.componentInstance.clickButton).toBe('LESS');
   });

   it('should check method onClick behaviour when button shows LESS', () => {
    fixture.componentInstance.firstClick = false;
    fixture.componentInstance.onClick();
    fixture.detectChanges();
    expect(fixture.componentInstance.clickButton).toBe('LESS');
   });

   it('should check method onClick behaviour when button shows MORE', () => {
    fixture.componentInstance.firstClick = false;
    fixture.componentInstance.clicked = true;
    fixture.componentInstance.onClick();
    fixture.detectChanges();
    expect(fixture.componentInstance.clickButton).toBe('MORE');
   });
  
});
