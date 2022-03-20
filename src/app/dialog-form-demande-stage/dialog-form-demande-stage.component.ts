import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DemandeStage } from '../demande-stages';

@Component({
  selector: 'app-dialog-form-demande-stage',
  templateUrl: './dialog-form-demande-stage.component.html',
  styleUrls: ['./dialog-form-demande-stage.component.sass']
})
export class DialogFormDemandeStageComponent {

  constructor(public dialogRef: MatDialogRef<DialogFormDemandeStageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DemandeStage) { }

  fermerDialogue(): void {
    this.dialogRef.close();
  }

}
