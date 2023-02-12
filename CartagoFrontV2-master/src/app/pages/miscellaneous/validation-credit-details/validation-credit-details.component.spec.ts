import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCreditDetailsComponent } from './validation-credit-details.component';

describe('ValidationCreditDetailsComponent', () => {
  let component: ValidationCreditDetailsComponent;
  let fixture: ComponentFixture<ValidationCreditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationCreditDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationCreditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
