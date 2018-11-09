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
  private usersPath = 'http://localhost:3001/users/admin';
  private userPath = 'http://localhost:3001/users/profile';

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]> (this.usersPath);
  }

  getUserId(id: number): Observable<Users> {
    const url = `${this.userPath}/${id}`;
    return this.http.get<Users>(url);
  }

  constructor(private http: HttpClient) { }
}
