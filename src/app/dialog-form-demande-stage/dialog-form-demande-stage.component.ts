import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Candidat } from '../candidat';
/* import { Region } from '../region';
import { Secteur } from '../secteur-activite'; */

@Component({
  selector: 'app-dialog-form-demande-stage',
  templateUrl: './dialog-form-demande-stage.component.html',
  styleUrls: ['./dialog-form-demande-stage.component.sass']
})
export class DialogFormDemandeStageComponent {

  constructor(public dialogRef: MatDialogRef<DialogFormDemandeStageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Candidat) { }

  fermerDialogue(): void {
    this.dialogRef.close();
  }

}
