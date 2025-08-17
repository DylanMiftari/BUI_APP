import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderReturnButtonService {
  private textSubject = new BehaviorSubject<string | null>(null);
  private linkSubject = new BehaviorSubject<string | null>(null);

  text$ = this.textSubject.asObservable();
  link$ = this.linkSubject.asObservable();

  constructor() { }

  updateButton(text: string, link: string) {
    this.textSubject.next(text);
    this.linkSubject.next(link);
  }

  deleteButton() {
    this.linkSubject.next(null);
    this.textSubject.next(null);
  }
}
