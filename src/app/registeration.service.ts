import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService{
  constructor( private http:HttpClient) { }
public loginUserFromRemote(user:User):Observable<any>{
 return  this.http.post<any>("http://csx.pythonanywhere.com/login/",user)

}
}
