import { provideRouter, RouterConfig }  from '@angular/router';
import {registerComponent} from  '../components/register/register';
import {summaryComponent} from '../components/summary/summary';
import {userComponent} from '../components/user/user';


const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/home',
		terminal: true
	},
	{
		path: 'home',
		component: summaryComponent,
		children: []
	},
	{
		path: 'register',
		component: registerComponent,
		children: []
	},
	{
		path: 'user',
		component: userComponent,
		children: []
	}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];