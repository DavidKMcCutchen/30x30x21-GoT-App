import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, CharacterPagination } from "@got-app/api-interfaces";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

const BASE_URL = 'https://anapioficeandfire.com/api/';
const MODEL = 'characters';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(this.getUrl());
  };

  getOne(id: string): Observable<Character> {
    return this.http.get<Character>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}