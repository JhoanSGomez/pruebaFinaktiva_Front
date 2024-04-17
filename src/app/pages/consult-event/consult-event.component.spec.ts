import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultEvent } from './consult-event.component';

describe('ConsultEvent', () => {
  let component: ConsultEvent;
  let fixture: ComponentFixture<ConsultEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultEvent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
