import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveMoniterComponent } from './live-moniter.component';

describe('LiveMoniterComponent', () => {
  let component: LiveMoniterComponent;
  let fixture: ComponentFixture<LiveMoniterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveMoniterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveMoniterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
