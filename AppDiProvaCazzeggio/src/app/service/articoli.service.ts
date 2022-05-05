import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { map, Observable } from "rxjs";
import { Game } from "../area-privata/models/game";
import { manga } from "../area-privata/models/manga";
import { serieTv } from "../area-privata/models/serieTv";

@Injectable({
    providedIn: "root"
})

export class articoliService{

    game: Game
    serie: serieTv
    manga: manga

    constructor(private http: HttpClient){  }

    getGames(){
        return this.http.get<{[key: string]: Game}>("https://negozio-27890-default-rtdb.europe-west1.firebasedatabase.app/games.json")
        .pipe(map(data =>{
            const gameArray: Game[] = []

            for(let key in data){
                if(data.hasOwnProperty(key)){
                gameArray.push({...data[key], id: key})
                }
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

    readGame(data: Game){
        this.game = data
    }

    readSerie(data: serieTv){
        this.serie = data
    }

    readManga(data: manga){
        this.manga = data
    }


}