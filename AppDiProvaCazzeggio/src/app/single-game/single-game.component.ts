import { Component, OnInit } from '@angular/core';
import { Game } from '../area-privata/models/game';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.css']
})
export class SingleGameComponent implements OnInit {

  singleGame: Game

  constructor() { }

  ngOnInit(): void { 
    

  }

  }

