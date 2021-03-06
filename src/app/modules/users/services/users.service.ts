import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../../../shared/model/users';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private beUrl = environment.backendUrl;

  private usersPath = this.beUrl + '/users/admin';
  private userPath = this.beUrl + '/users/profile';
  private userSignup = this.beUrl + '/users/signup';

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]> (this.usersPath);
  }

  getUserId(id: number): Observable<Users> {
    const url = `${this.userPath}/${id}`;
    return this.http.get<Users>(url);
  }

  addUserEntry(user: Users): Observable<Users> {
    return this.http.post<Users>(this.userSignup, user, httpOptions);
  }

  updateUserEntry(user: Users): Observable<any> {
    const url = `${this.userPath}/${user.userId}`;
    return this.http.put(url, user, httpOptions);
  }

  deleteUserEntry(id: number): Observable<any> {
    const url = `${this.userPath}/${id}/delete`;
    return this.http.delete(url);
  }

  constructor(private http: HttpClient) { }
}
