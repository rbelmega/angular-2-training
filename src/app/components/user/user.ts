import {Component} from '@angular/core';
import {DataService} from '../../services/data';

@Component({
	selector: 'user',
	template: require('./user.html')
})


export class userComponent {

	public users;

	constructor(private _dataService:DataService) {
		this._dataService.getUsers().subscribe(users => this.users = users);
	}
}