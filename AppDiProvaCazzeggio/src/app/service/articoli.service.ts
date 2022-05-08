import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Game } from "../area-privata/models/game";
import { manga } from "../area-privata/models/manga";
import { serieTv } from "../area-privata/models/serieTv";

@Injectable({
    providedIn: "root"
})

export class articoliService{
    
    allGames: Game[];
    allManga: manga[];
    allSerie: serieTv[];

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
            this.allGames = gameArray;
            // console.log(gameArray);
            
            return gameArray
        }))        
    }

    getManga(){
        return this.http.get<{[key: string]: manga}>("https://negozio-27890-default-rtdb.europe-west1.firebasedatabase.app/manga.json")
        .pipe(map(data =>{
            const mangaArray: manga[] = []

            for(let key in data){
                if(data.hasOwnProperty(key)){
                mangaArray.push({...data[key], id: key})
                }
            }
            this.allManga = mangaArray;
            return mangaArray
        })) 
    }

    getSerie(){
        return this.http.get<{[key: string]: serieTv}>("https://negozio-27890-default-rtdb.europe-west1.firebasedatabase.app/serie.json")
        .pipe(map(data =>{
            const serieArray: serieTv[] = []

            for(let key in data){
                if(data.hasOwnProperty(key)){
                serieArray.push({...data[key], id: key})
                }
            }
            this.allSerie = serieArray
            return serieArray
        })) 
    }

    getSingleGame(id: string){
        const game = this.allGames.find(
            (g) =>{
                return g.id === id
            }
        )
        return game
    }
    getSingleSerie(id: string){
        const game = this.allSerie.find(
            (g) =>{
                return g.id === id
            }
        )
        return game
    }
    getSingleManga(id: string){
        const game = this.allManga.find(
            (g) =>{
                return g.id === id
            }
        )
        return game
    }
}