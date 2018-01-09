import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreComboComponent } from './genre-combo.component';

describe('GenreComboComponent', () => {
  let component: GenreComboComponent;
  let fixture: ComponentFixture<GenreComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
