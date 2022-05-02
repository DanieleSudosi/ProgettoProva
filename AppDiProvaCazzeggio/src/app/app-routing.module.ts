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
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SingleSerieComponent } from './catalogo/single-serie/single-serie.component';
import { SingleMangaComponent } from './catalogo/single-manga/single-manga.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  // {path: 'private', redirectTo: "/sign-in", pathMatch: "full"},
  {path: 'sign-in', component: SignInComponent},
  {path: 'register-user', component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard],},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'verify-email-address', component: VerifyEmailComponent},
  
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
  {path: "game/:title", component: SingleGameComponent},

  //single serie
  {path: "serie/:title", component: SingleSerieComponent},

  //single manga
  {path: "manga/:title", component: SingleMangaComponent},



  //errori
  // {path: 'not-found', component: Page404Component},
  // {path: '**', redirectTo: 'not-found'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
