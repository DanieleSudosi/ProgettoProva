import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaPrivataComponent } from './area-privata/area-privata.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalogo', component: CatalogoComponent },
  {path: 'private', component: AreaPrivataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
