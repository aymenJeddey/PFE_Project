import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComptesComponent } from './add-comptes.component';

describe('AddComptesComponent', () => {
  let component: AddComptesComponent;
  let fixture: ComponentFixture<AddComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
