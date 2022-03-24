import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private formData: FormData = new FormData();
  public headers: any;
  
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'multipart/form-data; charset=utf-8');
    
  }

  getUsers(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users/1',
    );
  }

  editUser(data){
    this.formData.append('name',data.name);
    this.formData.append('email',data.email);
    this.formData.append('phone',data.phone);
    return this.http.post('https://jsonplaceholder.typicode.com/posts', this.formData, this.headers);
  }

}
