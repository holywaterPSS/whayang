import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebHomeComponent } from './web-home/web-home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '능운대펜션';

  constructor(private router: Router){
    this.router.navigate([WebHomeComponent.screenID]);
  }
}
