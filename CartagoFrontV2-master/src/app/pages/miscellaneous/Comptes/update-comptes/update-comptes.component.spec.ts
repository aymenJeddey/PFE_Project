import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComptesComponent } from './update-comptes.component';

describe('UpdateComptesComponent', () => {
  let component: UpdateComptesComponent;
  let fixture: ComponentFixture<UpdateComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
