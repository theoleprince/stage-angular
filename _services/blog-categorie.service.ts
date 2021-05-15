import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogCategorieService {

  constructor(private http: HttpClient) { }

  add(formData: FormData): Promise<any> {
    return this.http.post<any>(`${environment.apiUrl}/blog_categories`, formData).toPromise();
  }

  update(formData: FormData, id: number): Promise<any> {
    return this.http.post<any>(`${environment.apiUrl}/blog_categories/${id}`, formData).toPromise();
  }

  find(id: number): Promise<any> {
    return this.http.get<any>(`${environment.apiUrl}/blog_categories/${id}`).toPromise();
  }

  public get(): Promise<any> {
    return this.http.get<any>(`${environment.apiUrl}/blog_categories`).toPromise();
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/blog_categories/${id}`).toPromise();

  }
}

