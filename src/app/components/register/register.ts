import {Component} from '@angular/core';
import {DataService} from '../../services/data';


@Component({
	selector: 'register',
	template: require('./register.html')
})


export class registerComponent {
	private model;

	constructor(private _dataService: DataService) {
		this.model = {};
	}

	addUser() {
		let user = {
			name: this.model.userName,
			email: this.model.userEmail,
			id: Math.random()
		};
		
		this._dataService.addUser(user);
		this.model = {};
	}
}