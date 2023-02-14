import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FebfiformComponent } from './febfiform.component';

describe('FebfiformComponent', () => {
  let component: FebfiformComponent;
  let fixture: ComponentFixture<FebfiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FebfiformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FebfiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
