import { Component, OnInit } from '@angular/core';
import { articoliService } from 'src/app/service/articoli.service';

@Component({
  selector: 'app-cat-manga',
  templateUrl: './cat-manga.component.html',
  styleUrls: ['./cat-manga.component.css']
})
export class CatMangaComponent implements OnInit {

  dataManga = []

  constructor(private mangaService: articoliService) { }

  ngOnInit(): void {
    this.mangaService.getManga().subscribe(data =>{
      this.dataManga = data
    })
  }

}
