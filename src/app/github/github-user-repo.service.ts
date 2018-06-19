import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GithubUserRepoService {
    constructor(private _http: HttpClient) {
    }
    private _githubUserRepoUrl: string;

    getGithubUserRepos(name: string): Observable<any> {
        this._githubUserRepoUrl = `https://api.github.com/users/${name}/repos`;
        return this._http.get<any>(this._githubUserRepoUrl)
            .catch(this._handleError)
            .do(data => console.log(`Repo Data: Received`));
    }

    private _handleError(error: HttpErrorResponse) {
        return Observable.throw(error.message);
    }
}