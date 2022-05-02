import { Component, OnInit } from '@angular/core';
import { manga } from 'src/app/area-privata/models/manga';
import { articoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-single-manga',
  templateUrl: './single-manga.component.html',
  styleUrls: ['./single-manga.component.css']
})
export class SingleMangaComponent implements OnInit {

  manga: manga

  constructor(private mangaService: articoliService) { }

  ngOnInit(): void {
    this.manga = this.mangaService.manga
  }

}
