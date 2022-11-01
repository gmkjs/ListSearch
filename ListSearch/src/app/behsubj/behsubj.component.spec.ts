import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehsubjComponent } from './behsubj.component';

describe('BehsubjComponent', () => {
  let component: BehsubjComponent;
  let fixture: ComponentFixture<BehsubjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehsubjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehsubjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
