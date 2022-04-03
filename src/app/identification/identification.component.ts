import { Component, OnInit, } from '@angular/core';
import { IdentificationService } from '../identification.service';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.sass']
})
export class IdentificationComponent implements OnInit {
 nomEtPrenom = this.IdentificationService.obtenirNomEtPrenom();
  constructor(
    private IdentificationService: IdentificationService
  ) { }

  ngOnInit(): void {
    this.nomEtPrenom;
  }

}
