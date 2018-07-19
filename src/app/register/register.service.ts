import { Injectable } from '@angular/core';
import { HttpService, CookieService } from '../shared/services';
import { ApiUrl } from '../shared/constants/apiurl.constant';

@Injectable()
export class RegisterService {

	constructor(private httpService: HttpService) {

	}
	login(data: any, successCB: any, errorCB: any) {
		this.httpService.makeHttpPostRequestWithoutToken(ApiUrl.login, data)
			.subscribe((response) => {
				if (response.status == 200) {
					// this.cookieService.set('Csrf-Token',response.headers.get('Csrf-Token'));
					// let data = response.headers.get('Csrf-Token');
					successCB(response.body);
				}
			}, (error: any) => {
				errorCB(error.text());
				// if(error.status== 400){
				// 	errorCB(error.text());
				// }	
				// else if(error.status== 403){
				// 	errorCB(error.text());
				// }else{
				// 	errorCB("Internal Server Error");
				// }			
			});
	}

}