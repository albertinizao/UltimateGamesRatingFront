import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
//Http
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

//Own
import { AppComponent } from './app.component';
import { GenreComboComponent } from './genre-combo/genre-combo.component';
import { ComboService } from './service/combo/combo.service';
import { ComboRemoteService } from './service/remote/combo-remote.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    GenreComboComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    FormsModule,
    HttpClientModule
  ],
  providers: [ComboService, ComboRemoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
