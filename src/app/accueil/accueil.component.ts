import { Component, OnInit,Input } from '@angular/core';

// Composant

import { IdentificationService } from '../identification.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
nomEtPrenom: string = '';

  ajoutNomEtPrenom(nomEtPrenom:string){
this.identificationService.ajoutNomEtPrenom(nomEtPrenom)
  };
  getValue(val:string){
    this.nomEtPrenom = val;
    console.warn(val)

  }

  constructor(
    private identificationService : IdentificationService
  ) { }

  ngOnInit(): void {

  }

}
