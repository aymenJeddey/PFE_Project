import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeRoleComponent } from './groupe-role.component';

describe('GroupeRoleComponent', () => {
  let component: GroupeRoleComponent;
  let fixture: ComponentFixture<GroupeRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
