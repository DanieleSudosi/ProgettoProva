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
  constructor(private gameService: articoliService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(data =>{
      this.dataGame = data
      // console.log(data);
      
    })
  }

  getSingleGame(data: Game){
    // console.log(data);
    this.gameService.readGame(data)
  }
  
}
