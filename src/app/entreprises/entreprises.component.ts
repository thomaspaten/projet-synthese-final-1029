// Créer par Thomas Patenaude Poulin

import { Component,OnInit } from '@angular/core';
import { EntreprisesService } from '../entreprises.service';
import { Entreprise } from './entreprise';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.sass']
})

export class EntreprisesComponent implements OnInit {

  entreprises: Entreprise[] = []
  constructor(private entreprisesService: EntreprisesService) {}

  // get observedAttributes()
  ngOnInit(): void {
    this.obtenirEntreprises()
  }
  obtenirEntreprises(): void{
    this.entreprisesService.ObtenirEntreprises().subscribe(donnee => {this.entreprises = donnee; console.log("ping de entreprises.ts")})

  }

}
