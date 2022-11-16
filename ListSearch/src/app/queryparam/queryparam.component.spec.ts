import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparamComponent } from './queryparam.component';

describe('QueryparamComponent', () => {
  let component: QueryparamComponent;
  let fixture: ComponentFixture<QueryparamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryparamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
