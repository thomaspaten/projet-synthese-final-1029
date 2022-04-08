import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemandeStageService } from '../demande-stage.service';
import { DemandeStage } from '../demande-stages';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-voir-demande-stage',
  templateUrl: './voir-demande-stage.component.html',
  styleUrls: ['./voir-demande-stage.component.sass']
})
export class VoirDemandeStageComponent implements OnInit {

  titre = 'Demande de stage';

  @Input() demande: DemandeStage = {
    _id: '', title: '', studentName: '', studentPresentation: '',school: '', startDate: new Date, endDate: new Date, program: '',
  stageType: '', hoursPerWeek: 0, additionalInfo: '', published: true, paid: [''], active: true, skills: [''], region: '',
    activitySector: '', city: '', linkToResume: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
