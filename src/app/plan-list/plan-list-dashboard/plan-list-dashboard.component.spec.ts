import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanListDashboardComponent } from './plan-list-dashboard.component';

describe('PlanListDashboardComponent', () => {
  let component: PlanListDashboardComponent;
  let fixture: ComponentFixture<PlanListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanListDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
