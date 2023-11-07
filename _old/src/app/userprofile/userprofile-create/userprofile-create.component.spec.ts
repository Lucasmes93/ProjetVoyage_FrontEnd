import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileCreateComponent } from './userprofile-create.component';

describe('UserprofileCreateComponent', () => {
  let component: UserprofileCreateComponent;
  let fixture: ComponentFixture<UserprofileCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserprofileCreateComponent]
    });
    fixture = TestBed.createComponent(UserprofileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
