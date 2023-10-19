import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsViewComponent } from './destinations-view.component';

describe('DestinationsViewComponent', () => {
  let component: DestinationsViewComponent;
  let fixture: ComponentFixture<DestinationsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationsViewComponent]
    });
    fixture = TestBed.createComponent(DestinationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
