import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivewDashboardComponent } from './fivew-dashboard.component';

describe('FivewDashboardComponent', () => {
  let component: FivewDashboardComponent;
  let fixture: ComponentFixture<FivewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FivewDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FivewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
