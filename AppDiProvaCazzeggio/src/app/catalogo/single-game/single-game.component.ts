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
  
  game: Game

  constructor(private gameService: articoliService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void { 

    this.route.params.subscribe(
      (params: Params)=>{
        this.game = this.gameService.getSingleGame(params['id'])
       }
    )
    
  }


  }

