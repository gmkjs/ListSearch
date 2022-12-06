import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputdecorComponent } from './outputdecor.component';

describe('OutputdecorComponent', () => {
  let component: OutputdecorComponent;
  let fixture: ComponentFixture<OutputdecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputdecorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputdecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
