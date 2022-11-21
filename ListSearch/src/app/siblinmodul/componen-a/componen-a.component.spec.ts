import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenAComponent } from './componen-a.component';

describe('ComponenAComponent', () => {
  let component: ComponenAComponent;
  let fixture: ComponentFixture<ComponenAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
