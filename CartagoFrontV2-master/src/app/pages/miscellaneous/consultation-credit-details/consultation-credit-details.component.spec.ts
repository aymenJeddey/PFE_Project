import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationCreditDetailsComponent } from './consultation-credit-details.component';

describe('ConsultationCreditDetailsComponent', () => {
  let component: ConsultationCreditDetailsComponent;
  let fixture: ComponentFixture<ConsultationCreditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationCreditDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationCreditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
