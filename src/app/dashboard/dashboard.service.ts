import { Injectable } from '@angular/core';
import { HttpService, CookieService } from '../shared/services';
import { ApiUrl } from '../shared/constants/apiurl.constant';

@Injectable()
export class DashboardService {

	constructor(private httpService: HttpService) {

	}
	login(data: any, successCB: any, errorCB: any) {
		this.httpService.makeHttpPostRequestWithoutToken(ApiUrl.login, data)
			.subscribe((response) => {
				if (response.status == 200) {
					successCB(response.body);
				}
			}, (error: any) => {
				errorCB(error.text());
			});
	}
}