import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ComboService} from '../service/combo/combo.service';

@Component({
  selector: 'app-genre-combo',
  templateUrl: './genre-combo.component.html',
  styleUrls: ['./genre-combo.component.css']
})
export class GenreComboComponent implements OnInit {

  genre: string = "pepe";

  constructor(private comboService: ComboService) { }

  ngOnInit() {
  }

  getGenres(): string[] {
    return ["RPG","b"];
  }

}
