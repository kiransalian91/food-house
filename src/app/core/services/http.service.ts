
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions, ResponseContentType } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  errMsg: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  doAsyncTask(url: string, httpmethod?: string, body?: any) {
    let observable: Observable<any>;
    switch (httpmethod) {
      case 'GET':
        observable = this.http.get(url);
        break;

      case 'POST':
        observable = this.http.post(url, body);
        break;

      case 'PUT':
        observable = this.http.put(url, body);
        break;

      case 'DELETE':
        observable = this.http.delete(url);
        break;

      case 'PATCH':
        observable = this.http.patch(url, body);
        break;

      case 'HEAD':
        observable = this.http.head(url);
        break;

      default:
        observable = this.http.get(url);
        break;
    }

    return observable.pipe(
      catchError(error => this.handleError(error)));
  }


  private handleResponse(response: Response | any) {
    return response.json();
  }

  private async handleError(error: Response | any) {
    if (error.statusText === 'Unauthorized') {
    } else {
      return Promise.reject(this.errMsg);
    }
  }


}
