import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarPaisCode(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]>{

    const url = `${this.apiUrl}/regionalbloc/${region}`;

    return this.http.get<Country[]>(url, {params: this.httpParams}); // si se llaman igual solo se pondria params ecs7 params : params => params
  }
}
