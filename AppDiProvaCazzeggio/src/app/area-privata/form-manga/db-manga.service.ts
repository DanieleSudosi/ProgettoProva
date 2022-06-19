import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { manga } from "../models/manga";

@Injectable({
    providedIn: 'root'
  })

export class dbMangaService{


	constructor(private http: HttpClient) {	}

    addManga(title: string, mangaka: string, genre: string, publisher: string, release: string, status: string, volumi: number, price: number,description: string, img: string){
        const dataManga : manga = {title: title, mangaka: mangaka, genre: genre, publisher: publisher, release: release, status: status, volumi: volumi, price: price, description: description, img: img}
        
        this.http.post(
            'http://localhost:8080/api/manga/add',
            dataManga
        ).subscribe(feed =>{
            console.log(feed);
            
        })
    
    }

}