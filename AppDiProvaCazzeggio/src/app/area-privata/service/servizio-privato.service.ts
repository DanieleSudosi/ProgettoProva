import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioPrivatoService {

//  URL DA UTILIZZARE PER DB DI PROVA IN RETE
//https://progettoprovasmd-default-rtdb.europe-west1.firebasedatabase.app/


  constructor(private http: HttpClient) { }
}
