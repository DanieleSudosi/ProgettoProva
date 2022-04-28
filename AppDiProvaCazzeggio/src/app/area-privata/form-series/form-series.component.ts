import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dbSerieService } from './db-serie.service';

@Component({
  selector: 'app-form-series',
  templateUrl: './form-series.component.html',
  styleUrls: ['./form-series.component.css']
})
export class FormSeriesComponent implements OnInit {

  series = []

  constructor(private dbSerieService: dbSerieService) { }

  ngOnInit(): void {
  }

  creaSerie(dataSerie: {title: string, production: string, genre: string, actors: string, release: string, status: string, price: number, writer: string, description: string, img: string}, mioForm){
    this.dbSerieService.addSerie(dataSerie.title, dataSerie.production, dataSerie.genre, dataSerie.actors, dataSerie.release, dataSerie.status, dataSerie.price, dataSerie.writer, dataSerie.description, dataSerie.img)
    this.clearFilter(mioForm)
  }

  clearFilter(mioForm: NgForm){
    mioForm.reset()
  }

}
