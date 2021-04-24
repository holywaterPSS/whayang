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


	showReservation: boolean = false;
	showRoom: boolean = false;
	
	mouseOver(value: string) {
		this.showReservation = (value ==="showReservation");
		this.showRoom = (value === "showRoom");
		this._isMouseOver = true;
	}
	mouseOut(value: string) {
		this._isMouseOver = false;
		setTimeout(() => {
			if(value === "showReservation"){ this.showReservation = this._isMouseOver; }
			if(value === "showRoom"){ this.showRoom = this._isMouseOver; }
		}, 100);
	}
	private _isMouseOver: boolean = true;
	
}
