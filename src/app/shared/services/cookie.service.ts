import { Injectable } from '@angular/core';

@Injectable()
export class CookieService{

	public set(cookieName:any, cookieValue:any, days?:any, rememberMe?:any){
		if (this.get(cookieName)) {
			this.remove(cookieName);
		}
		if (rememberMe) {
			var expires = new Date();
			var exp = expires.getTime() + (days ? days : 30) * 24 * 60 * 60 * 1000;
			expires.setTime(exp);
			document.cookie = cookieName + '=' + cookieValue + '; ' + 'expires=' + expires + '; path=/' ;
		} else {
			document.cookie = cookieName + '=' + cookieValue + '; path=/';
		}
	}
	public get(cookieName: any) {
		let cookies: any = document.cookie.split(';');
		let length: number = cookies.length;
		let cookieValue: any = undefined;
		for (let i:number = 0; i < length; i++) {
			var index = cookies[i].indexOf(cookieName);
			if (index != -1) {
				cookieValue = cookies[i].split('=')[1];
				cookieValue = cookieValue;
				break;
			}
		}
		return cookieValue;
	}
	public remove(cookieName: any) {
		document.cookie = cookieName + '=; ' + 'expires=Thu, 01 Jan 1970 00:00:00 GMT' ;
		if (this.get(cookieName) == '') {
			return true;
		}
		return false;
	}
	public getAll() {
		let cookies: any = document.cookie.split(';');
		return cookies;
	}
	public removeAll() {
		let cookies: any = this.getAll();
		let length: number = cookies.length;
		for (let i:number = 0; i < length; i++) {
			var cookieName = cookies[i].split('=')[0];
			this.remove(cookieName);
		}
		if (document.cookie.length == 0)
			return true;
		return false;
	}


}