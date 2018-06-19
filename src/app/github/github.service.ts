import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GithubService {

  private currentUser: string;

  private _githubUsersUrl: string = "http://www.mocky.io/v2/59f3547e3200004f13a625bb";

  constructor(private http: HttpClient) { }

  getGithubUsers(): Observable<any> {
    return this.http.get<any>(this._githubUsersUrl, this.httpOptions)
      .do(function (data) {
        console.log(`Data: ${JSON.stringify(data)}`)
      });
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'version': '1.0.0'
    })
  };

  postGithubUsers(): Observable<any> {
    let data = {
      id: '1234',
      name: 'Angular'
    }
    return this.http.post<any>('http://test.post.com', data, this.httpOptions);
  }

  updateGithubUsers(): Observable<any> {
    let data = {
      id: '1234',
      name: 'Angular6'
    }
    return this.http.put<any>('http://test.post.com', data);
  }

  getNewUser(userName): Observable<any> {
    let gitHubUrl: string = 'https://api.github.com/users';
    return this.http.get<any>(`${gitHubUrl}/${userName}`).catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message);
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }

}
