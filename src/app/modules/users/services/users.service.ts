import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Users } from '../../../shared/model/users';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
    'Cache-Control': 'public, no-cache'
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private beUrl = environment.backendUrl;

  private usersPath = this.beUrl + '/users/admin';
  private userPath = this.beUrl + '/users/profile';
  private userSignup = this.beUrl + '/users/signup';
  private userLog = this.beUrl + '/users/login';
  private userOut = this.beUrl + '/users/logout';

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]> (this.usersPath, httpOptions);
  }

  getUserId(id: number): Observable<Users> {
    const url = `${this.userPath}/${id}`;
    return this.http.get<Users>(url, httpOptions);
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

  userLoginSvc(user: Users): Observable<Users> {
    return this.http.post<Users>(this.userLog, user, httpOptions);
  }

  userLogOut(){
    return this.http.get(this.userOut);
  }

  constructor(private http: HttpClient) { }
}
