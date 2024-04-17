import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationWallet } from './info-wallet.component';

describe('InformationWallet', () => {
  let component: InformationWallet;
  let fixture: ComponentFixture<InformationWallet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationWallet ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationWallet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
