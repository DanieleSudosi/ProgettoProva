import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dbMangaService } from './db-manga.service';

@Component({
  selector: 'app-form-manga',
  templateUrl: './form-manga.component.html',
  styleUrls: ['./form-manga.component.css']
})
export class FormMangaComponent implements OnInit {

  mangas = []

  constructor(private dbMangaService: dbMangaService) { }

  ngOnInit(): void { }

  creaManga(dataManga: {title: string, mangaka: string, genre: string, publisher: string, pubDate: string, stato: string, volumi: number, price: number, description: string, img: string}, mioForm){
    this.dbMangaService.addManga(dataManga.title, dataManga.mangaka, dataManga.genre, dataManga.publisher, dataManga.pubDate, dataManga.stato, dataManga.volumi, dataManga.price, dataManga.description, dataManga.img)
    this.clearFilter(mioForm)
  }

  clearFilter(mioForm: NgForm){
    mioForm.reset()
  }
}
