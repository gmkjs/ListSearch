import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiscompComponent } from './promiscomp.component';

describe('PromiscompComponent', () => {
  let component: PromiscompComponent;
  let fixture: ComponentFixture<PromiscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
