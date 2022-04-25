import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { serieTv } from "../models/serieTv";

@Injectable({
    providedIn: 'root'
  })

export class dbSerieService{

	constructor(private http: HttpClient) {
	}
    
    addSerie(title: string, production: string, genre: string, actors: string, release: string, status: string, price: number, writer: string, description: string, img: string){
        
        const dataSerie: serieTv = {title: title, production: production, genre: genre, actors: actors, release: release, status: status, price: price, writer: writer, description: description, img: img}

        this.http.post(
            'https://negozio-27890-default-rtdb.europe-west1.firebasedatabase.app/serie.json',
            dataSerie
        ).subscribe(feed => {
            console.log(feed);
            
        })
    }
}