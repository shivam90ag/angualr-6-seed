// import {Http, Headers, RequestMethod, RequestOptions, Response, URLSearchParams} from '@angular/http';



import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { catchError, map, tap, filter } from 'rxjs/operators';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/empty';

import { environment } from '../../../environments/environment';


@Injectable()
export class HttpService {

    constructor(
        private http: HttpClient,
        private router: Router,
        private cookieService: CookieService,
        private appState: AppState) {

    }
    public makeHttpPutRequestWithToken(url: string, data?: any, timeOut?) {
        return this.makeHttpRequest(url, "PUT", data, true, timeOut);
    }

    public makeHttpPutRequestWithoutToken(url: string, data?: any, timeOut?) {
        return this.makeHttpRequest(url, "PUT", data, false, timeOut);
    }
    public makeHttpDeleteRequestWithToken(url: string, data?: any, timeOut?) {
        return this.makeHttpRequest(url, "DELETE", data, true, timeOut);
    }

    public makeHttpDeleteRequestWithoutToken(url: string, data?: any, timeOut?) {
        return this.makeHttpRequest(url, "DELETE", data, false, timeOut);
    }
    public makeHttpGetRequestWithToken(url: string, data?: any, timeOut?) {
        return this.makeHttpRequest(url, "GET", data, true, timeOut);
    }

    public makeHttpGetRequestWithoutToken(url: string, data?: any, timeOut?) {
        return this.makeHttpRequest(url, "GET", data, false, timeOut);
    }

    public makeHttpPostRequestWithToken(url: string, data?: any, timeOut?) {

        return this.makeHttpRequest(url, "POST", data, true, timeOut);

    }
    public makeHttpPostRequestWithoutToken(url: string, data?: any, timeOut?) {
        return this.makeHttpRequest(url, "POST", data, false, timeOut);
    }
    private makeHttpRequest(url: string, requestMethod: string, data?: any, needToken?: boolean, timeOut?) {
        var timeOut = timeOut || 30000;
        url = environment.apiUrl + url;
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            body: '',
            responseType: 'json' as 'json',
            observe: 'response' as 'response'
        }
        // requestOptions['headers'] = new HttpHeaders({ 'Content-Type': 'application/json' });
        //if token needs for request then this block get user access token from cookies and add into Headers class properties
        if (needToken) {
            let sessionData = JSON.parse(this.cookieService.get('SessionData'));
            if (sessionData && sessionData.accessToken) {
                httpOptions.headers.append('Authorization', 'Bearer ' + sessionData.accessToken);
            }
        }
        if (data) {
            if (requestMethod != 'GET') {
                httpOptions.body = data;
            } else {
                let params = new HttpParams();
                //data should be a JSON object having 'key' must be 'string' and 'value' should not be an 'object/array'
                for (let key in data) {
                    if (typeof data[key] == 'boolean' || typeof data[key] == 'number' || typeof data[key] == 'string') {
                        params = params.append(key, data[key].toString());
                    }
                }
                // requestOptions.clone({params:params});
                httpOptions['params'] = params;
            }
        }

        let requestOptions: HttpRequest<any> = new HttpRequest(
            requestMethod,
            url,
            httpOptions);
        console.log("^^^^^^^^^^^^^^^^^^^^")
        return this.http.request(requestMethod, url, httpOptions);
    }
}
