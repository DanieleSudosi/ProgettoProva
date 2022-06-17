import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { manga } from "../models/manga";

@Injectable({
    providedIn: 'root'
  })

export class dbMangaService{


	constructor(private http: HttpClient) {	}

    addManga(title: string, mangaka: string, genre: string, publisher: string, pubDate: string, stato: string, volumi: number, price: number,description: string, img: string){
        const dataManga : manga = {title: title, mangaka: mangaka, genre: genre, publisher: publisher, pubDate: pubDate, stato: stato, volumi: volumi, price: price, description: description, img: img}
        
        this.http.post(
            'https://negozio-27890-default-rtdb.europe-west1.firebasedatabase.app/manga.json',
            dataManga
        ).subscribe(feed =>{
            console.log(feed);
            
        })
    
    }

}