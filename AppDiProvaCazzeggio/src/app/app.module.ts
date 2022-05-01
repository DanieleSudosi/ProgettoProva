import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AreaPrivataComponent } from './area-privata/area-privata.component';
import { FormGamesComponent } from './area-privata/form-games/form-games.component';
import { FormSeriesComponent } from './area-privata/form-series/form-series.component';
import { Page404Component } from './page404/page404.component';
import { FormMangaComponent } from './area-privata/form-manga/form-manga.component';
import { CatGamesComponent } from './catalogo/cat-games/cat-games.component';
import { CatSerieComponent } from './catalogo/cat-serie/cat-serie.component';
import { CatMangaComponent } from './catalogo/cat-manga/cat-manga.component';
import { SingleGameComponent } from './catalogo/single-game/single-game.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CatalogoComponent,
    AreaPrivataComponent,
    FormGamesComponent,
    FormSeriesComponent,
    Page404Component,
    FormMangaComponent,
    CatGamesComponent,
    CatSerieComponent,
    CatMangaComponent,
    SingleGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
