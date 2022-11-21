import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenBComponent } from './componen-b.component';

describe('ComponenBComponent', () => {
  let component: ComponenBComponent;
  let fixture: ComponentFixture<ComponenBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
