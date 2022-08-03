import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { peixe } from 'src/app/models/peixes';

@Injectable({
  providedIn: 'root'
})
export class PeixeService {
  apiUrl = 'Peixes'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


constructor(private httpClient: HttpClient) { }
    
  getPeixes(): Observable<peixe[]> {
      return this.httpClient.get<peixe[]>(this.apiUrl);
    }
    
  // Salva usuário no banco CREATE
  postPeixe(peixe: peixe):Observable<peixe> {
    return this.httpClient.post<peixe>(this.apiUrl, peixe, this.httpOptions);
  }

  // Exclui o usuário do banco DELETE
  deletePeixe(id: number):Observable<peixe> {
    return this.httpClient.delete<peixe>(`${this.apiUrl}/${id}`)
  }

  // Edita Usuário UPDATE
  updatePeixe(id: string, peixe: peixe):Observable<peixe> {
    return this.httpClient.put<peixe>(`${this.apiUrl}/${id}`, peixe, this.httpOptions);
  }

  // Lista usuario unico
  getPeixe(id: string):Observable<peixe[]> {
    return this.httpClient.get<peixe[]>(`${this.apiUrl}/${id}`)
  }
}
