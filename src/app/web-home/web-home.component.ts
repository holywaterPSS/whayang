import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-home',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.scss']
})
export class WebHomeComponent implements OnInit {
  static readonly screenID: string = 'web-home';
  constructor() { }

  ngOnInit() {
  }

}
