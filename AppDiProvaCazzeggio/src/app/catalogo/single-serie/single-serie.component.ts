import { Component, OnInit } from '@angular/core';
import { serieTv } from 'src/app/area-privata/models/serieTv';
import { articoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-single-serie',
  templateUrl: './single-serie.component.html',
  styleUrls: ['./single-serie.component.css']
})
export class SingleSerieComponent implements OnInit {

  serie:serieTv

  constructor(private serieService: articoliService) { }

  ngOnInit(): void {
    this.serie = this.serieService.serie
  }

}
