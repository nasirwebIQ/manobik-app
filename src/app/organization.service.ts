import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  constructor() {}
  private organizationData: any;

  // Set the organization data
  setOrganizationData(data: any) {
    this.organizationData = data;
  }

  // Get the organization data
  getOrganizationData() {
    return this.organizationData;
  }
}
