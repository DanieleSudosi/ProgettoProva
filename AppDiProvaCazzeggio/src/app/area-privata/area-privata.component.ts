import { Component, OnInit } from '@angular/core';
import { ServizioPrivatoService } from './service/servizio-privato.service';

@Component({
  selector: 'app-area-privata',
  templateUrl: './area-privata.component.html',
  styleUrls: ['./area-privata.component.css']
})
export class AreaPrivataComponent implements OnInit {


  constructor(private caricaServizio: ServizioPrivatoService) { }

  ngOnInit(): void {
    // this.caricaServizio.evento().subscribe(feeds => {
    // this.mieiFeedbacks = feeds;
    //   console.log(feeds);
  }

}
