import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmortissementTableComponent } from './amortissement-table.component';

describe('AmortissementTableComponent', () => {
  let component: AmortissementTableComponent;
  let fixture: ComponentFixture<AmortissementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmortissementTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmortissementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
