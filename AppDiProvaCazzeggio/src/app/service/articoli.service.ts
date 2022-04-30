import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";
import { Game } from "../area-privata/models/game";
import { manga } from "../area-privata/models/manga";
import { serieTv } from "../area-privata/models/serieTv";

@Injectable({
    providedIn: "root"
})

export class articoliService{


    constructor(private http: HttpClient,
                private route: ActivatedRoute,
                private router: Router){  }

    getGames(){
        return this.http.get("https://negozio-27890-default-rtdb.europe-west1.firebasedatabase.app/games.json")
        .pipe(map(data =>{
            const gameArray: Game[] = []

            for(let key in data){
                gameArray.push(data[key])
            }
            return gameArray
        }))        
    }

    getManga(){
        return this.http.get("https://negozio-27890-default-rtdb.europe-west1.firebasedatabase.app/manga.json")
        .pipe(map(data =>{
            const mangaArray: manga[] = []

            for(let key in data){
                mangaArray.push(data[key])
            }
            return mangaArray
        })) 
    }

    getSerie(){
        return this.http.get("https://negozio-27890-default-rtdb.europe-west1.firebasedatabase.app/serie.json")
        .pipe(map(data =>{
            const serieArray: serieTv[] = []

            for(let key in data){
                serieArray.push(data[key])
            }
            return serieArray
        })) 
    }

    getSingleGame(title: string, softHouse: string, genre: string, publisher: string, release: string, price: number, description: string, img:string){
        let httpParams = new HttpParams({ fromObject: {title: title, softHouse: softHouse, genre: genre, publisher: publisher, release: release, price: price, description: description, img:img}})
        console.log(httpParams);
        
      }

}