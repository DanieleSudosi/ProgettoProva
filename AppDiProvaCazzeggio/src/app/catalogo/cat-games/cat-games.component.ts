import { Component, OnInit } from '@angular/core';
import { articoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-cat-games',
  templateUrl: './cat-games.component.html',
  styleUrls: ['./cat-games.component.css']
})
export class CatGamesComponent implements OnInit {

  dataGame = []

  constructor(private gameService: articoliService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(data =>{
      this.dataGame = data
    })
  }

}
