import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubUserRepoService } from './github-user-repo.service';
import { GithubService } from './github.service';
import { LoadingComponent } from '../shared/loading.component';

@Component({
  selector: 'app-github-user-repo',
  templateUrl: './github-user-repo.component.html',
  styleUrls: ['./github-user-repo.component.css']
})
export class GithubUserRepoComponent implements OnInit {

  private context: string;
  private errorMessage: string;

  constructor(private _activatedRoute: ActivatedRoute,
    private _githubUserRepoService: GithubUserRepoService,
    private _githubService: GithubService,
    private _router: Router) {

  }
  pageTitle: string = "";
  gitHubUserRepos: any[] = [];

  ngOnInit() {
    let name = this._githubService.getCurrentUser();
    //let name = this._activatedRoute.snapshot.paramMap.get('name');
    this.pageTitle = `Repos of ${name}`;
    this.context = `${name} data`;
    this._githubUserRepoService.getGithubUserRepos(name).subscribe(
      repos => { this.gitHubUserRepos = repos; console.log(this.gitHubUserRepos) },
      error => console.log(error))
  }

  onBack() {
    this._router.navigate(['/githubUsers']);
  }

  timedOut(event) {
    console.log(event);
    this.errorMessage = 'Oops, something went wrong, Plz retry.'
  }
}
