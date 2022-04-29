import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaPrivataComponent } from './area-privata/area-privata.component';
import { FormGamesComponent } from './area-privata/form-games/form-games.component';
import { FormMangaComponent } from './area-privata/form-manga/form-manga.component';
import { FormSeriesComponent } from './area-privata/form-series/form-series.component';
import { CatGamesComponent } from './catalogo/cat-games/cat-games.component';
import { CatMangaComponent } from './catalogo/cat-manga/cat-manga.component';
import { CatSerieComponent } from './catalogo/cat-serie/cat-serie.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { SingleGameComponent } from './single-game/single-game.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  //catalogo
  {path: 'catalogo', component: CatalogoComponent, children:[
    {path: "catGames", component: CatGamesComponent},
    {path: "catSerie", component: CatSerieComponent},
    {path: "catManga", component: CatMangaComponent},
  ] },


  //area privata
  {path: 'private', component: AreaPrivataComponent, children:[
    {path: 'addGames', component: FormGamesComponent},
    {path: 'addSeries', component: FormSeriesComponent},
    {path: 'addManga', component: FormMangaComponent}
  ] },

  //single game
  {path: "single:id", component: SingleGameComponent},


  //errori
  {path: 'not-found', component: Page404Component},
  {path: '**', redirectTo: 'not-found'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
