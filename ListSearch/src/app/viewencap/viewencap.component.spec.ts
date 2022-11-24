import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewencapComponent } from './viewencap.component';

describe('ViewencapComponent', () => {
  let component: ViewencapComponent;
  let fixture: ComponentFixture<ViewencapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewencapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewencapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
