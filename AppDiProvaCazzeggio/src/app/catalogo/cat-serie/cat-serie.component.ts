import { Component, OnInit } from '@angular/core';
import { serieTv } from 'src/app/area-privata/models/serieTv';
import { articoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-cat-serie',
  templateUrl: './cat-serie.component.html',
  styleUrls: ['./cat-serie.component.css']
})
export class CatSerieComponent implements OnInit {

  dataSerie = []
  dataSingleSerie: serieTv
  constructor(private serieService: articoliService) { }

  ngOnInit(): void {
    this.serieService.getSerie().subscribe(data =>{
      this.dataSerie = data
    })
  }

  getSingleSerie(data: serieTv){
    this.dataSingleSerie = data
    console.log(this.dataSingleSerie);
  }
}
