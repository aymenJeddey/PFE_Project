import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCompteDetailsComponent } from './validation-compte-details.component';

describe('ValidationCompteDetailsComponent', () => {
  let component: ValidationCompteDetailsComponent;
  let fixture: ComponentFixture<ValidationCompteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationCompteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationCompteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
