import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor() {}

  private titleSubject = new BehaviorSubject<string>('Default Title');
  title$ = this.titleSubject.asObservable(); // Observable for components to subscribe to

  setTitle(title: string) {
    this.titleSubject.next(title); // Update the title
  }
}
