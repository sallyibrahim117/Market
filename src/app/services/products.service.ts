import { Injectable } from '@angular/core';
import { environment } from '../../envirnment/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllproducts():Observable<any>{
    return this.http.get(`${environment.apiUrl}/products`)
  }
  getCategoriesOfProducts():Observable<any>{
    return this.http.get(`${environment.apiUrl}/products/categories`)
  }
  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/products/category/${category}`);
  }
  getproductById(proid:number):Observable<any>{
    return  this.http.get(`${environment.apiUrl}/products/${proid}`)
   }
}
