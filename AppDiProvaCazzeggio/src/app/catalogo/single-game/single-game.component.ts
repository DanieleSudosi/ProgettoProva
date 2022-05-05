import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/area-privata/models/game';
import { articoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})
export class SingleGameComponent implements OnInit {
  
  game: Game

  constructor(private gameService: articoliService) { }

  ngOnInit(): void { 

  }


  }

