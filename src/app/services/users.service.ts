import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../envirnment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


    constructor(private http:HttpClient) { }
  getAllUsers():Observable<any>{
    return this.http.get(`${environment.apiUrl}/users`)
  }
}
