import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionnelleComponent } from './exceptionnelle.component';

describe('ExceptionnelleComponent', () => {
  let component: ExceptionnelleComponent;
  let fixture: ComponentFixture<ExceptionnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceptionnelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
