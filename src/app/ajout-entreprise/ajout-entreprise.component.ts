import { Component, OnInit,Input } from '@angular/core';
import { CandidatService } from '../candidat.service';
import { Entreprise } from '../entreprise';
import { EntreprisesService } from '../entreprises.service';

// Comment faire du regex dans Angular ?
@Component({
  selector: 'app-ajout-entreprise',
  templateUrl: './ajout-entreprise.component.html',
  styleUrls: ['./ajout-entreprise.component.sass']
})
export class AjoutEntrepriseComponent implements OnInit {

  @Input() entreprise: Entreprise = {
_id: '',
name: '',
description: '',
imageUrl: '',
contactName: '',
contactEmail: '',
contactPhone:'',
address: '',
city: '',
province: '',
postalCode: '',
published: true,
__v: 0
    };

  constructor(private candidatService: CandidatService) { }

  gererSoumission = () => {
    console.log(this.entreprise);
  }

  ngOnInit(): void {
  }

}
