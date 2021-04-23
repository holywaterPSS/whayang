import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeoutError } from 'rxjs';
import { WebHomeComponent } from '../web-home/web-home.component';

@Component({
	selector: 'web-navigator',
	templateUrl: './web-navigator.component.html',
	styleUrls: ['./web-navigator.component.scss']
})
export class WebNavigatorComponent {

	constructor(private router: Router) { }

	goToHome() {
		this.router.navigate[WebHomeComponent.screenID];
	}


	showDetail: boolean = false;
	
	mouseOver() {
		this.showDetail = true;
		this._isMouseOver = true;
	}
	mouseOut() {
		this._isMouseOver = false;
		setTimeout(() => {
			this.showDetail = this._isMouseOver;
		}, 100);
	}
	private _isMouseOver: boolean = true;
	
}
