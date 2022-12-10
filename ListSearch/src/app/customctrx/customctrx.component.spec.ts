import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomctrxComponent } from './customctrx.component';

describe('CustomctrxComponent', () => {
  let component: CustomctrxComponent;
  let fixture: ComponentFixture<CustomctrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomctrxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomctrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
