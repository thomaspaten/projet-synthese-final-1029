import { Component, OnInit } from '@angular/core';
import { OffreStageService } from '../offre-stage.service'; // Service
import { InterfaceOffreStage } from '../interface-offre-stage'; // Interface 

@Component({
  selector: 'app-liste-offres-stages',
  templateUrl: './liste-offres-stages.component.html',
  styleUrls: ['./liste-offres-stages.component.sass']
})
export class ListeOffresStagesComponent implements OnInit {
  title = "Offres de stage";
  btnAction = "Ajouter une offre de stage"
  offrestage: InterfaceOffreStage[] = [];


  // colonnes du tableau de la liste des offres de stages '
   displayedColumns = ['title', 'activitySector', 'region', 'published', 'action' ];

  constructor(private offrestageService: OffreStageService) { }

  ngOnInit(): void {
    this.getOffreDeStage();
  }
  // Appel l'ensemble des offres de stages
  getOffreDeStage(): void {
    this.offrestageService.getOffresStages()
    .subscribe(offrestage => this.offrestage = offrestage);
  } 

}
