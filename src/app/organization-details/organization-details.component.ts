// organization-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-details.component.html',
  styleUrl: './organization-details.component.scss',
})
export class OrganizationDetailComponent implements OnInit {
  organization: any;

  constructor(
    private organizationService: OrganizationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.organization = this.organizationService.getOrganizationData(); // Get the organization data
  }

  goBackToList() {
    this.router.navigate(['/organization']); // Navigate to the organization list
  }
}
