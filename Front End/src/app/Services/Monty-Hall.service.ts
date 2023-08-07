import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root', // This registers the service at the root level of your application
})
export class MontyHallService {
  // Service methods and logic go here

  /**
   *
   */
  constructor(private http: HttpClient ) {
    
  }
  private apiUrl = 'https://localhost:44343/api/';
    Postata(simulations = 0, switchorNot = false): Observable<any>{
        return this.http.post(this.apiUrl+"GameSimulator?simulations="+simulations +"&switchorNot="+switchorNot,null).pipe(
            catchError((error: HttpErrorResponse) => {
                // Handle the error
                console.log('An error occurred:', error);
                return throwError('Something bad happened; please try again later.');
              }),
            map(data => {
            let response = data as any;
            console.log(response.headers);
            if (response.statusCode == "200") {
                return response.montyHallSimulations;
            }
            else{
                console.log(response);
                return ;
            }
        }));
    }
}