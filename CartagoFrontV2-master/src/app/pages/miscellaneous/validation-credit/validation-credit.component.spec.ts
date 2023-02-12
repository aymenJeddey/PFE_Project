import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCreditComponent } from './validation-credit.component';

describe('ValidationCreditComponent', () => {
  let component: ValidationCreditComponent;
  let fixture: ComponentFixture<ValidationCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
