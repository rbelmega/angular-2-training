import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES}  from '@angular/router';
import {registerComponent} from  '../register/register';
import {userComponent} from '../user/user';

@Component({
	selector: 'application',
	template: require('./application.html'),
	directives: [
		ROUTER_DIRECTIVES,
		registerComponent,
		userComponent
	],
	styles: [`
	.text-center {
		text-align: center;
	}
	.wrapper {
		display: flex;
	}
	.col {
		flex-grow: 1;
	}
	`]
})

export default class ApplicationComponent {
	constructor() {
	}
}