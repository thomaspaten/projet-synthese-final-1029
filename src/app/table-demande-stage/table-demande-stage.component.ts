import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormDemandeStageComponent } from '../dialog-form-demande-stage/dialog-form-demande-stage.component';
import { DemandeStage } from '../demande-stages';
import { DEMANDESTAGES } from '../mock-demande-stage';

@Component({
  selector: 'app-table-demande-stage',
  templateUrl: './table-demande-stage.component.html',
  styleUrls: ['./table-demande-stage.component.sass']
})
export class TableDemandeStageComponent implements OnInit {
  tableauDemandeStage: DemandeStage[] = DEMANDESTAGES;
  columnsToDisplay = ['title', 'activitySector', 'region', 'startDate'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
