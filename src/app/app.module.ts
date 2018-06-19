import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubService } from './github/github.service';
import { HomeComponent } from './home/home.component';
import { GithubUserRepoComponent } from './github/github-user-repo.component';
import { GithubUserRepoService } from './github/github-user-repo.service';
import { RepoLanguagePipe } from './repo-language.pipe';
import { StarPipe } from './star.pipe';
import { AutoFocusDirective } from './auto-focus.directive';
import { LoadingComponent } from './shared/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    HomeComponent,
    GithubUserRepoComponent,
    RepoLanguagePipe,
    StarPipe,
    AutoFocusDirective,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'githubUsers', component: GithubComponent },
      { path: 'githubUsers/:name', component: GithubUserRepoComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [GithubService, GithubUserRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
