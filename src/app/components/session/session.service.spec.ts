import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';

describe(SessionService.name, () => {
  let service: SessionService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#should call GET getSchedule and return an array of slots', () => {
    let data = [ 
      {
        "id": 1,
        "day": "MON",
        "date": "AUG 19",
        "session": [
          {
          "time":"08:00",
          "booked": true
          },
          {
            "time":"09:00",
            "booked": false
          },
          {
            "time":"10:00",
            "booked": false
          },
          {
            "time":"11:00",
            "booked": false
          },
          {
            "time":"12:00",
            "booked": false
          },
          {
            "time":"13:00",
            "booked": false
          },
          {
            "time":"14:00",
            "booked": false
          },
          {
            "time":"15:00",
            "booked": false
          }
        ]
      },
      {
        "id": 2,
        "day": "TUE",
        "date": "AUG 20",
        "session": [
          {
          "time":"08:10",
          "booked": false
          },
          {
            "time":"09:10",
            "booked": false
          },
          {
            "time":"10:10",
            "booked": false
          },
          {
            "time":"11:10",
            "booked": false
          },
          {
            "time":"12:10",
            "booked": false
          },
          {
            "time":"13:10",
            "booked": false
          },
          {
            "time":"14:10",
            "booked": false
          }
        ]
      },
      {
        "id": 3,
        "day": "WED",
        "date": "AUG 21",
        "session": [
          {
          "time":"08:15",
          "booked": false
          },
          {
            "time":"09:15",
            "booked": false
          },
          {
            "time":"10:15",
            "booked": false
          },
          {
            "time":"11:15",
            "booked": false
          },
          {
            "time":"12:15",
            "booked": false
          },
          {
            "time":"13:15",
            "booked": false
          },
          {
            "time":"14:15",
            "booked": false
          }
        ]
      },
      {
        "id": 4,
        "day": "THU",
        "date": "AUG 22",
        "session": [
          {
          "time":"08:20",
          "booked": false
          },
          {
            "time":"09:20",
            "booked": false
          },
          {
            "time":"10:20",
            "booked": false
          },
          {
            "time":"11:20",
            "booked": false
          },
          {
            "time":"12:20",
            "booked": false
          },
          {
            "time":"13:20",
            "booked": false
          },
          {
            "time":"14:20",
            "booked": false
          }
        ]
      }
    ];
			
    service.getSchedule().subscribe((res) => {
      expect(res).toEqual(data);
    });

    const req = httpController.expectOne({
      method: 'GET'
    });

    req.flush(data);
  });
  
});
