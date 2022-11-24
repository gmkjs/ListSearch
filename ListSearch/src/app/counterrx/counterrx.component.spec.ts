import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterrxComponent } from './counterrx.component';

describe('CounterrxComponent', () => {
  let component: CounterrxComponent;
  let fixture: ComponentFixture<CounterrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterrxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
