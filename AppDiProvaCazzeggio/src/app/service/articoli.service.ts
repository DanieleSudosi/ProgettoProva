import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, switchMap } from "rxjs";
import { Game } from "../area-privata/models/game";
import { manga } from "../area-privata/models/manga";
import { serieTv } from "../area-privata/models/serieTv";

@Injectable({
    providedIn: "root"
})

export class articoliService{

    constructor(private http: HttpClient){  }

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


}