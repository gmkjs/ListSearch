import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangdetecComponent } from './changdetec.component';

describe('ChangdetecComponent', () => {
  let component: ChangdetecComponent;
  let fixture: ComponentFixture<ChangdetecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangdetecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangdetecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
