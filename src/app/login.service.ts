import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from './people';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }
  public registerUserFromRemote(people:People):Observable<any>{
    return  this.http.post<any>("http://csx.pythonanywhere.com/signup/",people);
   }

}

