import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {

  usermail:any;
  constructor(private _HttpClient: HttpClient) { 

    let token:any = localStorage.getItem('token');
    if(token!=null){

    let userEmail:any= jwtDecode(token);
    console.log(userEmail.email);
    this.usermail=userEmail.email;
    }
  }
  
  getEmail () :any{
    return localStorage.getItem('userEmail')
  }

 setEmail(userEmail:string) {
   localStorage.setItem('userEmail', userEmail)
 }
  
  

 signup(userdata:any):Observable<any>  {
let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

let options:any = { headers: headers };
console.log(userdata);
return this._HttpClient
    .post('https://goldblv.com/api/hiring/tasks/register', userdata, {
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",

      }
    })
  
 }



}
 