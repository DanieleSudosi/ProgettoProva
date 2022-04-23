import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaPrivataComponent } from './area-privata/area-privata.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  //catalogo
  {path: 'catalogo', component: CatalogoComponent },


  //area privata
  {path: 'private', component: AreaPrivataComponent },



  //errori
  {path: 'not-found', component: Page404Component},
  {path: '**', redirectTo: 'not-found'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
