import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyServiceService {

  constructor(private _http:HttpClient) { 
    //const getCharacterUrl ='https://rickandmortyapi.com/api/character/';
  }
 
  getFirstCharacterByName(data:any):Observable<any>{
    return this._http.get('https://rickandmortyapi.com/api/character/?name='+data)
  }
  getSecondCharacterByName(data:any):Observable<any>{
    return this._http.get('https://rickandmortyapi.com/api/character/?name='+data)
  }
 
}
