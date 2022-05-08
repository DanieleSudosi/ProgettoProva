import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { manga } from 'src/app/area-privata/models/manga';
import { articoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-single-manga',
  templateUrl: './single-manga.component.html',
  styleUrls: ['./single-manga.component.css']
})
export class SingleMangaComponent implements OnInit {

  dataManga: manga[]
  manga: manga = new manga()

  constructor(private mangaService: articoliService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mangaService.getManga().subscribe(() => {
      this.route.paramMap.subscribe((obs) => {
        const id = obs.get("id")
        this.manga = this.mangaService.getSingleManga(id)
      })
    })
  }

}
