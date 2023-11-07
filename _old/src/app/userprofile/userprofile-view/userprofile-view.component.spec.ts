import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileViewComponent } from './userprofile-view.component';

describe('UserprofileViewComponent', () => {
  let component: UserprofileViewComponent;
  let fixture: ComponentFixture<UserprofileViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserprofileViewComponent]
    });
    fixture = TestBed.createComponent(UserprofileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
