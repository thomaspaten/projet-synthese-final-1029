import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemandeStageService } from '../demande-stage.service';
import { DemandeStage } from '../demande-stages';

@Component({
  selector: 'app-modif-demande-stage',
  templateUrl: './modif-demande-stage.component.html',
  styleUrls: ['./modif-demande-stage.component.sass']
})
export class ModifDemandeStageComponent implements OnInit {
  @Input() demandeStage: DemandeStage = {
    _id: '', title: '', studentName: '', studentPresentation: '',school: '', startDate: '', endDate: '', program: '',
    stageType: '', hoursPerWeek: 0, additionalInfo: '', published: true, paid: '', active: true, skills: '', region: '',
    activitySector: '', city: '', linkToResume: '', __v: 0
  }
  @Output() majTableau = new EventEmitter

  constructor(private demandeStageService: DemandeStageService) { }

  ngOnInit(): void {
  }

  onSave(demandeStageForm: NgForm) {
    if (demandeStageForm.valid) {
      if(this.demandeStage._id != null && this.demandeStage._id !='') {
        this.demandeStageService.majDemandeStage(this.demandeStage).subscribe(_ => { this.majTableau.emit()})
      } else {
        this.demandeStageService.ajoutDemandeStage(this.demandeStage).subscribe(_ => {this.majTableau.emit()})
      }
    }
  }

}
