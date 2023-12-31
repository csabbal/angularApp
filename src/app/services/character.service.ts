import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { character, characterApiResponse } from '../types/rickAndMorty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(public http: HttpClient) { }


  getCharacter(id:number): Observable<character> {
    return this.http.get<characterApiResponse>(`https://rickandmortyapi.com/api/character/${id.toString()}`).pipe(
      map((it) => {
        console.log('downloaded data', it)
        return it
      })
    )
  }

}
