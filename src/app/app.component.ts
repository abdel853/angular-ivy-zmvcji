import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(){}
  
  public ngOnInit(): void {}

  public ngOnDestroy(): void {}
}
