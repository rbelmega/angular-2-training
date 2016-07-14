import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Injectable} from "@angular/core";
import { User, Users } from '../components/definition';

@Injectable()
export class DataService {

	private userData;
	private subject: Subject<User> = new Subject<User>();

	addUser(user: User): void {
		this.userData.push(user);
		this.subject.next(this.userData);
	}

	getUsers(): Observable<Users> {
		return this.subject.asObservable();
	}


	constructor() {
		this.userData = [];
	}
}