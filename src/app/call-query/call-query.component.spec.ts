import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallQueryComponent } from './call-query.component';

describe('CallQueryComponent', () => {
  let component: CallQueryComponent;
  let fixture: ComponentFixture<CallQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
