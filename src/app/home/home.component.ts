import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['h2 { font-weight: normal; }']
})
export class HomeComponent implements OnInit {

  public pageTitle: string = 'Learn Angular';

  constructor() { }

  ngOnInit() {
  }

}
