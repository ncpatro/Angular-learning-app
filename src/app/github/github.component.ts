import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  pageTitle: string = 'Github Users';
  githubUsers: any = [];
  errorMessage: string;

  private context = 'GitHub Users';

  constructor(private gitHubUserSevice: GithubService) { }

  ngOnInit() {
    this.gitHubUserSevice.getGithubUsers().subscribe((users) => {
      this.githubUsers = users;
    }, () => {
      this.errorMessage = 'Oops, something went wrong, Plz retry.'
    });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  getUser(newUser) {
    this.gitHubUserSevice.getNewUser(newUser).subscribe((user) => {
      let newUser = {
        id: user.id,
        name: user.name,
        blog: user.blog,
        public_repos: user.public_repos,
        created_at: user.created_at,
        avatar_url: user.avatar_url
      }
      this.githubUsers.push(newUser);
    }, (err) => {
      console.log(err);
      this.errorMessage = 'Sorry, Can not add the user now, Plz retry.'
    });
  }

  timedOut(event) {
    this.errorMessage = 'Oops, something went wrong, Plz retry.'
  }

  setGithubuser(name) {
    this.gitHubUserSevice.setCurrentUser(name);
  }

}
