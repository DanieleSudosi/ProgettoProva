import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { serieTv } from 'src/app/area-privata/models/serieTv';
import { articoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-single-serie',
  templateUrl: './single-serie.component.html',
  styleUrls: ['./single-serie.component.css']
})
export class SingleSerieComponent implements OnInit {

  dataSerie: serieTv[]
  serie:serieTv = new serieTv()

  constructor(private serieService: articoliService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.serieService.getSerie().subscribe(() => {
      this.route.paramMap.subscribe((obs) => {
        const id = obs.get("id")
        this.serie = this.serieService.getSingleSerie(id)
      })
    })    
  }

}
