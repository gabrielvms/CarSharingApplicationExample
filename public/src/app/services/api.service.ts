import { Injectable, NgZone } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Ride } from '../models/ride';
import { Interest } from '../models/interest';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl:string = 'http://localhost:5000';

  constructor(private http: HttpClient, private _zone: NgZone) { }

  signUp(user: User){
    let userJson = JSON.stringify({
      "user": {
        "username": user.username,
        "phone": user.phone
      }
    });

    return this.http.post<any>(this.baseUrl+'/sign-up', userJson);
  }

    getRides(){
      return this.http.get<Ride[]>(this.baseUrl+'/rides')
    };

    getInterests(){
      return this.http.get<Interest[]>(this.baseUrl+'/interests')
    };

    getServerSentEvent(): Observable<any> {
      return Observable.create((observer:any) => {
        const eventSource = new EventSource(this.baseUrl+'/stream/test');
        eventSource.onmessage = event => {
          this._zone.run(() => {
            observer.next(event);
          });
        };
        eventSource.onerror = error => {
          this._zone.run(() => {
            observer.error(error);
          });
        };
      });
    }

}
