import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnChanges, OnInit {
  @Input() context: string;
  @Output() loadingTimeout = new EventEmitter<boolean>();

  constructor() { }

  ngOnChanges() {

  }

  ngOnInit() {
    this.loadingDone();
  }

  clickMe() {
    console.log('Clicked...');
  }

  loadingDone() {
    setTimeout(() => {
      this.loadingTimeout.emit(true);
    }, 3000);
  }

}
