import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ComboService } from '../service/combo/combo.service';

@Component({
  selector: 'app-genre-combo',
  templateUrl: './genre-combo.component.html',
  styleUrls: ['./genre-combo.component.css']
})
export class GenreComboComponent implements OnInit {

  genre: string = "pepe";

  private translateKeyPrefix: string = "GAME.FIELDS.GENRE.";
  private emptyKey: string = "EMPTY_VALUE";

  constructor(private comboService: ComboService, private translate: TranslateService) { }

  ngOnInit() {
    this.comboService.getGenres();
  }

  getGenres(): string[] {
    return this.comboService.genres;
  }

  translateGenre(key: string): any {
    return this.translate.get(this.translateKeyPrefix + key).map(val => val == this.translateKeyPrefix + key ? key: val);
  }

  isOnlyEmpty():boolean{
    return this.getGenres()[0]==this.emptyKey;
  }

}
