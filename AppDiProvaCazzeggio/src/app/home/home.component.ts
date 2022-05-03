import { Component, OnInit } from '@angular/core';
import { Game } from '../area-privata/models/game';
import { articoliService } from '../service/articoli.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private service: articoliService) { }

  ngOnInit(): void {
  }

}
