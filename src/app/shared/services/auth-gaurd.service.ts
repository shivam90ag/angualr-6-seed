import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AppState } from '../../app.service';
import { CookieService} from './cookie.service';
import {HttpService} from  './http.service'
import { ApiUrl } from '../constants';

 
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {

	constructor(private appState: AppState,
		private router: Router,
		private cookieService: CookieService,
		private httpService: HttpService ) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        const url: string = state.url;
        console.log("=============1")
		return this.isUserAuthenticated(route, url);
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean  {
        console.log("=============2")
        return this.canActivate(route, state);
	}

	isUserAuthenticated(route: ActivatedRouteSnapshot, url: string): Promise<boolean>|boolean {
        if (this.cookieService.get('loggedInUserEmail')) {
            return true;
			// if (this.appState.get('orgUserData')) {
			// 	this.setAppData(route, url);
			// 	return true;
			// } else {
			// 	return this.getOrganizationUserData(route, url);
			// }
            
        } else {
        	// this.appState.set('orgUserData', null);
            // this.appState.set('isAuthenticated', 0);
            // this.appState.set('headerType', 0);
            // this.cookieService.removeAll();
            // this.router.navigate(['/login'], {queryParams: {msg: messages.SESSION_EXPIRED}, queryParamsHandling: 'merge'});
            this.router.navigate(['/login']);
            return false;
        }
	}

	// getOrganizationUserData(route: ActivatedRouteSnapshot, url: string): Promise<boolean> | boolean {
	// 	const email: string = this.cookieService.get('loggedInUserEmail');
	// 	return this.httpService.makeHttpPostRequestWithToken(ApiUrl.orgUserDetails, {email: email})
	// 		.toPromise()
	// 		.then((response: any) => {
	// 			if (response.status === 200) {
	// 				this.appState.set('orgUserData', response.json());
	// 				this.setAppData(route, url);
	// 				return true;
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			this.appState.set('orgUserData', null);
	// 			this.appState.set('isAuthenticated', 0);
	// 			this.appState.set('headerType', 0);
	// 			this.cookieService.removeAll();
	// 			this.router.navigate(['/login'], {queryParams: {msg: (error && error.text && typeof error.text!=='function')? error.text(): messages.SESSION_EXPIRED}, queryParamsHandling: 'merge'});
	// 			return false;
	// 		});
	// }
	
	// setAppData(route: ActivatedRouteSnapshot, url: string) {
	// 	this.appState.set('headerType', route.data.headerType);
	// 	this.appState.set('activeTab', route.data.activeTab);
	// 	this.appState.set('organizationId', environment.organizations[0]);
	// 	if (window.innerWidth <= 768) {
	// 		this.appState.state.menuCollapsed = true;
	// 	}
	// 	this.appState.set('menuCollapsed', this.appState.state.menuCollapsed);
	// 	this.appState.set('eventType', route.params.eventType);
	// 	this.appState.set('eventId', route.params.id);
	// 	this.appState.set('isAuthenticated', 1);
	// }
}
