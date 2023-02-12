import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseSelectComponent } from './devise-select.component';

describe('DeviseSelectComponent', () => {
  let component: DeviseSelectComponent;
  let fixture: ComponentFixture<DeviseSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviseSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
