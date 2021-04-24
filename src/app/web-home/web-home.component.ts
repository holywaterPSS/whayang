import { Component } from '@angular/core';

@Component({
	selector: 'web-home',
	templateUrl: './web-home.component.html',
	styleUrls: ['./web-home.component.scss']
})
export class WebHomeComponent {
	static readonly screenID: string = 'web-home';

	public selectHomeImage: string = 'home1';
	private _homeImageList = ['home1', 'home2'];

	constructor() {
		let index: number = 0;
		setInterval(() => {
			index = (index + 1 === this._homeImageList.length) ? 0 : index + 1;
			this.selectHomeImage = this._homeImageList[index];
		}, 3500);
	}
}
