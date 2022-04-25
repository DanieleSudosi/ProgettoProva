import { Component, OnInit } from '@angular/core';
import { dbService } from './db.service';

@Component({
  selector: 'app-db-fire',
  templateUrl: './db-fire.component.html',
  styleUrls: ['./db-fire.component.css']
})
export class DbFireComponent implements OnInit {

  games = []

  constructor(private dbService: dbService) { }

  ngOnInit(): void {

  }

  creaGame(dataGame: {title: string, softHouse: string, genre: string, publisher: string, release: string, price: number, description: string, img:string}){
    this.dbService.addGame(dataGame.title, dataGame.softHouse, dataGame.genre, dataGame.publisher, dataGame.release, dataGame.price, dataGame.description, dataGame.img)
  }

}
