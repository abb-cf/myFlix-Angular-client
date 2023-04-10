import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistartionFormComponent } from './user-registartion-form.component';

describe('UserRegistartionFormComponent', () => {
  let component: UserRegistartionFormComponent;
  let fixture: ComponentFixture<UserRegistartionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistartionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistartionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
