import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Game } from "../models/game";

@Injectable({
    providedIn: 'root'
  })

export class dbService {
    //  URL DA UTILIZZARE PER DB DI PROVA IN RETE
    //https://negozio-27890-default-rtdb.europe-west1.firebasedatabase.app/

	constructor(private http: HttpClient) { }

    addGame(title: string, softHouse: string, genre: string, publisher: string, release: string, price: number, description: string, img:string){
        const dataGame: Game = {title: title, softHouse: softHouse, genre: genre, publisher: publisher, release: release, price: price, description: description, img:img}
        
        this.http.post(
            'http://localhost:8080/api/game/add',
            dataGame
        ).subscribe(game =>{
            console.log(game);
            
        })
    
    
    }

}