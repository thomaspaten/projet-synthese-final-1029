
// Creer par Thomas Patenaude Poulin
// Ceci est le service qui a été créé pour faire appel à l'api des candidats

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from './entreprise'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EntreprisesService {
  EntreprisessURL = 'https://projet-synthese-api.herokuapp.com/api/2096335/enterprise';
  constructor(private http: HttpClient) { }

  ObtenirEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.EntreprisessURL);
  }
}
