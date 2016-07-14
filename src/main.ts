import {bootstrap} from '@angular/platform-browser-dynamic';
import {FORM_PROVIDERS} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app/services/routes';

import ApplicationComponent from './app/components/application/application';
import {DataService} from './app/services/data';

bootstrap(ApplicationComponent, [
	FORM_PROVIDERS,
	HTTP_PROVIDERS,
	APP_ROUTER_PROVIDERS,
	DataService
]).catch(console.error.bind(console));