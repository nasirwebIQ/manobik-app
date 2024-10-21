// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.scss',
// })
// export class HeaderComponent {
//   constructor(private router: Router) {}

//   profileNave() {
//     // Navigate to the 'profile' route
//     this.router.navigate(['/profile']);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { filter } from 'rxjs/operators';
// import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.
// import { RouterModule } from '@angular/router'; // Import RouterModule to use Router functionalities

// @Component({
//   selector: 'app-header',
//   standalone: true, // Make this component standalone
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
//   imports: [CommonModule, RouterModule], // Import necessary modules
// })
// export class HeaderComponent implements OnInit {
//   title: string = 'Default Title';
//   // Default title

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.router.events
//       .pipe(filter((event) => event instanceof NavigationEnd))
//       .subscribe((event: NavigationEnd) => {
//         console.log('Navigation Ended:', event.url);
//         this.updateTitle(event.url);
//         console.log('Updated Title:', this.title);
//       });
//   }

//   // updateTitle(url: string) {
//   //   // Change title based on the current URL
//   //   switch (url) {
//   //     case '/profile':
//   //       this.title = 'Profile';
//   //       break;
//   //     case '/fivew-form':
//   //       this.title = '5W Form';
//   //       break;
//   //     case '/plan-list':
//   //       this.title = 'Plan List';

//   //       break;
//   //     case '/organization':
//   //       this.title = 'Organization List';
//   //       break;
//   //     case '/user-list':
//   //       this.title = 'User Management';
//   //       break;
//   //     case '/successful':
//   //       this.title = 'Login Successful';
//   //       break;
//   //     case '/forgot-password':
//   //       this.title = 'Forgot Password';
//   //       break;
//   //     case '/resposive':
//   //       this.title = 'Responsive Design';
//   //       break;
//   //     default:
//   //       this.title = 'Default Title'; // Fallback title
//   //   }
//   // }

//   updateTitle(url: string) {
//     console.log(`Updating title for URL: ${url}`); // Log the current URL
//     switch (url) {
//       case '/profile':
//         this.title = 'Profile';
//         console.log('Title updated to: Profile'); // Log title change
//         break;
//       case '/fivew-form':
//         this.title = '5W Form';
//         console.log('Title updated to: 5W Form');
//         break;
//       case '/plan-list':
//         this.title = 'Plan List';
//         console.log('Title updated to: Plan List');
//         break;
//       case '/organization':
//         this.title = 'Organization List';
//         console.log('Title updated to: Organization List');
//         break;
//       case '/user-list':
//         this.title = 'User Management';
//         console.log('Title updated to: User Management');
//         break;
//       case '/successful':
//         this.title = 'Login Successful';
//         console.log('Title updated to: Login Successful');
//         break;
//       case '/forgot-password':
//         this.title = 'Forgot Password';
//         console.log('Title updated to: Forgot Password');
//         break;
//       case '/resposive':
//         this.title = 'Responsive Design';
//         console.log('Title updated to: Responsive Design');
//         break;
//       default:
//         this.title = 'Default Title'; // Fallback title
//         console.log('Title updated to: Default Title');
//     }
//   }

//   profileNave() {
//     // Navigate to the profile page
//     this.router.navigate(['/profile']);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { filter } from 'rxjs/operators';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
//   imports: [CommonModule, RouterModule],
// })
// export class HeaderComponent implements OnInit {
//   title: string = 'Default Title';
//   previousUrl: string = ''; // To track the previous URL

//   constructor(private router: Router) {}

//   ngOnInit() {
//     console.log('Initial Title:', this.title); // Log the initial title

//     this.router.events
//       .pipe(filter((event) => event instanceof NavigationEnd))
//       .subscribe((event: NavigationEnd) => {
//         console.log('Navigation Ended:', event.url);
//         this.updateTitle(event.url);
//         this.checkRouteMatch(event.url);
//         console.log('Updated Title:', this.title); // Log the title after updating
//       });
//   }

//   updateTitle(url: string) {
//     // Only update title if the URL has changed
//     if (url === this.previousUrl) {
//       return; // If the URL hasn't changed, exit the function
//     }
//     this.previousUrl = url; // Update the previous URL

//     console.log(`Updating title for URL: ${url}`);
//     switch (url) {
//       case '/profile':
//         this.title = 'Profile';
//         break;
//       case '/fivew-form':
//         this.title = '5W Form';
//         break;
//       case '/plan-list':
//         this.title = 'Plan List';
//         break;
//       case '/organization':
//         this.title = 'Organization List';
//         break;
//       case '/user-list':
//         this.title = 'User Management';
//         break;
//       case '/successful':
//         this.title = 'Login Successful';
//         break;
//       case '/forgot-password':
//         this.title = 'Forgot Password';
//         break;
//       case '/resposive':
//         this.title = 'Responsive Design';
//         break;
//       default:
//         this.title = 'Default Title'; // Fallback title
//     }
//     console.log('Current Title:', this.title); // Log the title after updating
//   }
//   checkRouteMatch(url: string) {
//     // Logic to check if the route matches some condition
//     if (url === '/profile') {
//       console.log('Route matches the profile page');
//     } else {
//       console.log('Route does not match the profile page');
//     }
//   }
//   profileNave() {
//     console.log('Navigating to Profile. Current Title:', this.title); // Log title before navigation
//     this.router.navigate(['/profile']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser'; // Import Angular Title service
import { TitleService } from '../title.service'; // Ensure TitleService is imported correctly
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {
  title: string = 'Default Title'; // Keep title as a string
  constructor(
    private router: Router,

    private activatedRoute: ActivatedRoute,
    private titleService: TitleService,
    private titleServiceFromBrowser: Title // Rename for clarity
  ) {}

  ngOnInit() {
    // Subscribe to the title observable

    this.titleService.title$.subscribe((newTitle) => {
      this.title = newTitle; // Update the title when it changes
      this.titleServiceFromBrowser.setTitle(newTitle); // Set the document title
    });

    // Subscribe to router events to update title
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });

    // Set the title for the current route when the component initializes
    this.updateTitle();
  }

  updateTitle() {
    // Get the title from the activated route data
    let currentRoute = this.activatedRoute.root; // Start from the root route
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild; // Navigate to the last child
    }
    const title = currentRoute.snapshot.data['title']; // Get the title from route data
    if (title) {
      this.titleService.setTitle(title); // Update the title in the service
      this.titleServiceFromBrowser.setTitle(title); // Set the document title
    } else {
      this.titleService.setTitle('Default Title'); // Fallback title
      this.titleServiceFromBrowser.setTitle('Default Title'); // Set the document title to fallback
    }
  }

  profileNave() {
    console.log('Navigating to Profile. Current Title:', this.title); // Log title before navigation
    this.router.navigate(['/profile']);
  }
}
