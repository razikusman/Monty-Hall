import { HttpClient, HttpHeaderResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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
        return this.http.post(this.apiUrl+"GameSimulator?simulations="+simulations +"&switchorNot="+switchorNot,null).pipe(map(data => {
            let response = data as any;
            console.log(response.headers);
            if(response.ok){}
            return response.MontyHallSimulations;
        }));
    }
}