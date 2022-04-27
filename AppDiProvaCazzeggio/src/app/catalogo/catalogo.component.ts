import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

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
