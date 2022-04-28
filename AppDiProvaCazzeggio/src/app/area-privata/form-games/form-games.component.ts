import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dbService } from './db-game.service';

@Component({
  selector: 'app-form-games',
  templateUrl: './form-games.component.html',
  styleUrls: ['./form-games.component.css']
})
export class FormGamesComponent implements OnInit {
  
  games = []

  constructor(private dbService: dbService) { }

  ngOnInit(): void { }

  creaGame(dataGame: {title: string, softHouse: string, genre: string, publisher: string, release: string, price: number, description: string, img:string}, mioForm){
    this.dbService.addGame(dataGame.title, dataGame.softHouse, dataGame.genre, dataGame.publisher, dataGame.release, dataGame.price, dataGame.description, dataGame.img)
    this.clearFilter(mioForm)
  }

  clearFilter(mioForm: NgForm){
    mioForm.reset()
  }

}
