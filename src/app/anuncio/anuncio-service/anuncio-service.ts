import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private apiUrl = 'https://localhost:7183/api/Anuncios';
  constructor(private http: HttpClient) {}

  // getAnuncio(id: String): Observable<any> {
  //   var url = `${this.apiUrl}Anuncios/${id}`;
  //   return this.http.get(url);
  // }

  obterTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
        
  }

}
