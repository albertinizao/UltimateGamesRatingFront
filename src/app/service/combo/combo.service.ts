import { Injectable } from '@angular/core';
import { ComboRemoteService } from '../remote/combo-remote.service'

@Injectable()
export class ComboService {

  genres = ["EMPTY_VALUE"];

  constructor(private comboRemoteService: ComboRemoteService) { }

  getGenres(): void {
    this.comboRemoteService.getGenres().subscribe(res => this.genres = res);
  }

}
