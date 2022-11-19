import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcompComponent } from './getcomp.component';

describe('GetcompComponent', () => {
  let component: GetcompComponent;
  let fixture: ComponentFixture<GetcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
