import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdecorComponent } from './inputdecor.component';

describe('InputdecorComponent', () => {
  let component: InputdecorComponent;
  let fixture: ComponentFixture<InputdecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputdecorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputdecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
