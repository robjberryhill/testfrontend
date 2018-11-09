import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../../../shared/model/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userPath = 'http://localhost:3001/users/admin';

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]> (this.userPath)
  };

  constructor(private http: HttpClient) { }
}
