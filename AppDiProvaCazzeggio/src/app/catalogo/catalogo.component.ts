import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../area-privata/models/game';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  dataGame: Game

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  catGames(){
    this.router.navigate(['catGames'],{relativeTo: this.route})
  }
  catSerie(){
    this.router.navigate(['catSerie'],{relativeTo: this.route})
  }
  catManga(){
    this.router.navigate(['catManga'],{relativeTo: this.route})
  }
  
  

}
