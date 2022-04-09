import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../candidat.service';
import {Candidat} from '../candidat';

@Component({
  selector: 'app-liste-des-candidats',
  templateUrl: './liste-des-candidats.component.html',
  styleUrls: ['./liste-des-candidats.component.sass']
})
export class ListeDesCandidatsComponent implements OnInit {

  candidats: Candidat[] = [];

  


  constructor(private candidatService: CandidatService ) { }

  ngOnInit(): void {
    this.getCandidats()
  }

  getCandidats(): void {
    this.candidatService.getCandidats()
      .subscribe(resultat => this.candidats = resultat);
  }
}


