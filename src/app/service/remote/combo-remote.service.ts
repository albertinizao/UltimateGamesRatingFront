import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ComboRemoteService {
    public url: string = "https://ultimate-games-rating.herokuapp.com/combo/genre";

  constructor(
    public http: HttpClient
  ) { }

  getGenres(): Observable<any> {
    return this.http.get(this.url + 'productos');
  }

}
