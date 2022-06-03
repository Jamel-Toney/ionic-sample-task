import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://reqres.in';

  constructor(private http: HttpClient) { }

  loadUser(): Observable<any> {
    return this.http.get(`${this.url}/api/users?page=2`).pipe(
      map(results => results['data'])
    );
  }
}
