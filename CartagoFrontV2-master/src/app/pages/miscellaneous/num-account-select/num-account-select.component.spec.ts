import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumAccountSelectComponent } from './num-account-select.component';

describe('NumAccountSelectComponent', () => {
  let component: NumAccountSelectComponent;
  let fixture: ComponentFixture<NumAccountSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumAccountSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumAccountSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
