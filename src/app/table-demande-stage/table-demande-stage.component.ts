import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NgForm } from '@angular/forms';

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons'; 

import { DemandeStage } from '../demande-stages';
import { DemandeStageService } from '../demande-stage.service';
import { DEMANDESTAGES } from '../mock-demande-stage';


@Component({
  selector: 'app-table-demande-stage',
  templateUrl: './table-demande-stage.component.html',
  styleUrls: ['./table-demande-stage.component.sass']
})
export class TableDemandeStageComponent implements OnInit {
  tableauDemandeStages: DemandeStage[] = DEMANDESTAGES;
  newDemandeStage!: DemandeStage;
  columnsToDisplay = ['title', 'activitySector', 'region', 'startDate'];
  title = 'Demande de stage';
  graduation = faGraduationCap;
  line = faMinus;
    
  constructor(private demandeStageService: DemandeStageService) { }

  ngOnInit(): void {
    this.newDemandeStage.title="";
    this.getDemandeStages();
  }

  getDemandeStages(): void {
    this.demandeStageService.getDemandeStages()
      .subscribe(resultat => this.tableauDemandeStages = resultat)
  }

  onAdd(tableDemandeStage: MatTable<DemandeStage>, demandeStageFormAjout: NgForm){
    if(demandeStageFormAjout.valid){
      this.demandeStageService.addDemandeStages(this.newDemandeStage)
      .subscribe(demandeStage =>{this.tableauDemandeStages.push(demandeStage);
      demandeStageFormAjout.resetForm();
      tableDemandeStage.renderRows();
      });
    }
    
  }

}
