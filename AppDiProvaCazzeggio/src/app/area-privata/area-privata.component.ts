import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServizioPrivatoService } from './service/servizio-privato.service';

@Component({
  selector: 'app-area-privata',
  templateUrl: './area-privata.component.html',
  styleUrls: ['./area-privata.component.css']
})
export class AreaPrivataComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private router: Router) { } //private caricaServizio: ServizioPrivatoService

  ngOnInit(): void {
    // this.caricaServizio.evento().subscribe(feeds => {
    // this.mieiFeedbacks = feeds;
    //   console.log(feeds);
  }

  addGames(){
    this.router.navigate(['addGames'],{relativeTo: this.route})
  }
  addSeries(){
    this.router.navigate(['addSeries'],{relativeTo: this.route})
  }
  addManga(){
    this.router.navigate(['addManga'],{relativeTo: this.route})
  }

}
