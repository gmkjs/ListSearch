import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservcompComponent } from './observcomp.component';

describe('ObservcompComponent', () => {
  let component: ObservcompComponent;
  let fixture: ComponentFixture<ObservcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
