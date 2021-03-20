import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignQueueComponent } from './campaign-queue.component';

describe('CampaignQueueComponent', () => {
  let component: CampaignQueueComponent;
  let fixture: ComponentFixture<CampaignQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
