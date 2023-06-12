import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = new HttpHeaders();
  url = "http://localhost:5073"

  constructor(
    private http: HttpClient,
  ) {
    this.headers = this.headers.set('Content-Type', 'application/json');
  }

  get<T>(ctrllerUri: string): Observable<T> {
    let response = this.http.get<T>(this.url + ctrllerUri, {
      headers: this.headers,
    });
      response.pipe(
        catchError((err) => {
          return throwError(err);
        }),
      );
      return response;
  }

  post<T>(ctrllerUri: string, data?: any): Observable<T> {
    const body = JSON.stringify(data);
    const response = this.http.post<T>(this.url + ctrllerUri, body, {
      headers: this.headers,
    });
    response.pipe(
      catchError((err) => {
        return throwError(err);
      }),
    );
    return response;
  }

  put<T>(ctrllerUri: string, data?: any): Observable<T> {
    const body = JSON.stringify(data);
    const response = this.http.put<T>(this.url + ctrllerUri, body, {
      headers: this.headers,
    });
    response.pipe(
      catchError((err) => {
        return throwError(err);
      }),
    );
    return response;
  }

  delete<T>(ctrllerUri: string): Observable<T> {
    return this.http.delete<T>(this.url + ctrllerUri, {
      headers: this.headers,
    });
  }
}
