import { HttpParams } from '@angular/common/http';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Game } from 'src/app/area-privata/models/game';
import { articoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-cat-games',
  templateUrl: './cat-games.component.html',
  styleUrls: ['./cat-games.component.css']
})
export class CatGamesComponent implements OnInit {

  dataGame = []
  dataSingleGame: Game
  constructor(private gameService: articoliService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(data =>{
      this.dataGame = data
    })
  }

  getSingleGame(data: Game){
    this.dataSingleGame = data
    console.log(this.dataSingleGame);
  }
  
}
