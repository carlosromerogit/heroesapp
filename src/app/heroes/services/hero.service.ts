import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }
  getHeroById(id:string):Observable<Hero>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
  }
  getHeroByQuery(query:string):Observable<Hero[]>{
    return this.http.get<Hero[]>(`http://localhost:3000/heroes/?q=${query}`)
  }
}
