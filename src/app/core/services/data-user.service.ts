import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {
  baseUri: string = environment.baseUri;

  private userSubject = new BehaviorSubject<User | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(true);
  public user$ = this.userSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetchUser(): Observable<User | null> {
    return this.http.get<User>(`${this.baseUri}/me`).pipe(
      tap(user => {
        this.userSubject.next(user);
        this.loadingSubject.next(false);
      }),
      catchError(() => {
        this.loadingSubject.next(false);
        return of(null);
      })
    );
  }

  getUser(): User {
    return this.userSubject.value!;
  }
}
