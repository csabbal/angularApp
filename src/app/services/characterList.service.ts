import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { character, characterListApiResponse } from '../types/rickAndMorty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterListService {

  constructor(public http: HttpClient) { }


  getCharacterList(page = 1): Observable<character[]> {
    let url = 'https://rickandmortyapi.com/api/character'
    url = page ? url + '?page=' + page : url
    return this.http.get<characterListApiResponse>(url).pipe(
      map((it) => {
        console.log('downloaded data', it)
        return it.results
      })
    )
  }

}
