import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDetailComponent } from './organization-details.component';

describe('OrganizationDetailsComponent', () => {
  let component: OrganizationDetailComponent;
  let fixture: ComponentFixture<OrganizationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
