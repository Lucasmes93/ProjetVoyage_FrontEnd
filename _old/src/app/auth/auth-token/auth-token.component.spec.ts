import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('AuthTokenComponent', () => {
  let component: AuthTokenComponent;
  let fixture: ComponentFixture<AuthTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthTokenComponent]
    });
    fixture = TestBed.createComponent(AuthTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
