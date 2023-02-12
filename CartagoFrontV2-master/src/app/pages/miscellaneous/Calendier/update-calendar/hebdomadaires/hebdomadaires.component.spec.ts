import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebdomadairesComponent } from './hebdomadaires.component';

describe('HebdomadairesComponent', () => {
  let component: HebdomadairesComponent;
  let fixture: ComponentFixture<HebdomadairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebdomadairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HebdomadairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
