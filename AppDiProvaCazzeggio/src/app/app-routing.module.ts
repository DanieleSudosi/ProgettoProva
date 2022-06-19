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
import { SingleGameComponent } from './catalogo/single-game/single-game.component';
import { SingleSerieComponent } from './catalogo/single-serie/single-serie.component';
import { SingleMangaComponent } from './catalogo/single-manga/single-manga.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  // {path: 'private', redirectTo: "/sign-in", pathMatch: "full"},
  
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
  {path: "game/:id", component: SingleGameComponent},

  //single serie
  {path: "serie/:id", component: SingleSerieComponent},

  //single manga
  {path: "manga/:id", component: SingleMangaComponent},



  //errori
  // {path: 'not-found', component: Page404Component},
  // {path: '**', redirectTo: 'not-found'} 

  //join us

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
