import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Game } from 'src/app/area-privata/models/game';
import { articoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})
export class SingleGameComponent implements OnInit {
  
  dataGames: Game[]
  game: Game = new Game()

  constructor(private gameService: articoliService,
              private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.gameService.getGames().subscribe(data => {
      this.dataGames = data
      this.route.paramMap.subscribe((obs) => {
        const id = obs.get("id")
        this.game = this.gameService.getSingleGame(id)
      });
    }) 
  }


  }

