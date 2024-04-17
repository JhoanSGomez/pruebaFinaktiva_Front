import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEvent } from './register-event.component';

describe('RegisterEvent', () => {
  let component: RegisterEvent;
  let fixture: ComponentFixture<RegisterEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEvent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
