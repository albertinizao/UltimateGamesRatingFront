import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ComboRemoteService {
  // public url: string = "http://localhost:8080/combo";
  public url: string = "https://ultimate-games-rating.herokuapp.com/combo";
  public genre_url: string = "/genre";

  constructor(
    public http: HttpClient
  ) { }

  getGenres(): Observable<any> {
    return this.http.get(this.url + this.genre_url);
  }

  getGeneration(): Observable<any> {
    return this.http.get(this.url + this.genre_url);
  }

}
