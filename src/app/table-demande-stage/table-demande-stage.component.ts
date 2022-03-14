import { Component, OnInit } from '@angular/core';
import { Region } from '../region';
import { REGION } from '../mock-regions';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormDemandeStageComponent } from '../dialog-form-demande-stage/dialog-form-demande-stage.component';
import { Candidat } from '../candidat';
import { CANDIDAT } from '../mock-candidats';

const tableauCandidat: Candidat[] = CANDIDAT;
const tableauRegion: Region[] = REGION;

@Component({
  selector: 'app-table-demande-stage',
  templateUrl: './table-demande-stage.component.html',
  styleUrls: ['./table-demande-stage.component.sass']
})
export class TableDemandeStageComponent implements OnInit {
  columnsToDisplay = ['name','title'];
  dataSource = tableauCandidat || tableauRegion;

  constructor() { }

  ngOnInit(): void {
  }

}
