// Creer par Rachida Zaoug
// Ceci est le service qui a été créé pour faire appel à l'api des candidats

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidat } from './candidat'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable({
    providedIn: 'root'
  })

  export class CandidatService {

    candidatsUrl = 'https://projet-synthese-api.herokuapp.com/api/2096335/candidate';
  
    constructor(private http: HttpClient) { }
  
    getCandidats(): Observable<Candidat[]> {
      return this.http.get<Candidat[]>(this.candidatsUrl);
    }
  
    
  }
