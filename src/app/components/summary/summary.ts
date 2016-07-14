import {Component} from '@angular/core';
import {DataService} from '../../services/data';

@Component({
	selector: 'summary',
	template: require('./summary.html')
})

export class summaryComponent {

	private usersCount;

	constructor(private _dataService:DataService) {
		this._dataService.getUsers().subscribe(users => {
			this.usersCount = users.length;
		});

	// 	getUsers(): Observable<User> {
	// 		return this.subject.asObservable();
	// }
	}
}