import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ComboRemoteService {
  public url: string = "http://localhost:8080/combo";
  public genre_url: string = "/genre";

  constructor(
    public http: HttpClient
  ) { }

  getGenres(): Observable<any> {
    return this.http.get(this.url + this.genre_url).map(res => {
      console.log("http ok");
      return res;
    }).catch(error => {
      console.log("ERROR");
      console.log(error);
      return error;
    });
  }

}
