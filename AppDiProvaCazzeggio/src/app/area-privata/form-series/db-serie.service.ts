import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { serieTv } from "../models/serieTv";

@Injectable({
    providedIn: 'root'
  })

export class dbSerieService{

	constructor(private http: HttpClient) {
	}
    
    addSerie(title: string, production: string, genre: string, actors: string, pubDate: string, stato: string, price: number, writer: string, description: string, img: string){
        
        const dataSerie: serieTv = {title: title, production: production, genre: genre, actors: actors, pubDate: pubDate, stato: stato, price: price, writer: writer, description: description, img: img}

        this.http.post(
            'https://negozio-27890-default-rtdb.europe-west1.firebasedatabase.app/serie.json',
            dataSerie
        ).subscribe(feed => {
            console.log(feed);
            
        })
    }
}