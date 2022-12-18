import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingmodulComponent } from './siblingmodul.component';

describe('SiblingmodulComponent', () => {
  let component: SiblingmodulComponent;
  let fixture: ComponentFixture<SiblingmodulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingmodulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingmodulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
