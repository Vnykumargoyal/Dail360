import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPanelMargeComponent } from './all-panel-marge.component';

describe('AllPanelMargeComponent', () => {
  let component: AllPanelMargeComponent;
  let fixture: ComponentFixture<AllPanelMargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPanelMargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPanelMargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
