import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';


@Component({
  selector: 'app-fiche-candidat',
  templateUrl: './fiche-candidat.component.html',
  styleUrls: ['./fiche-candidat.component.sass']
})
export class FicheCandidatComponent implements OnInit {

  // candidat: Candidat | undefined;

  // @Input() candidat?: Candidat;

  // candidats: Candidat[] = [];

  _id!: number;
  candidat!: Candidat;

  constructor(private candidatService: CandidatService, private route: ActivatedRoute, private router: Router) {}

  
  ngOnInit() {
    // this.getCandidats()
    this.candidat = new Candidat();
    this._id = this.route.snapshot.params['_id'];

    // Ceci est une fonction qui permet l'affichage du détail d'un candidat
    this.candidatService.getCandidat(this._id)
    .subscribe(data => {
      console.log(data)
      this.candidat = data;
      }, error => console.log(error));
  }

  // Ceci est une fonction qui permet la mise à jour de la fiche du candidat
  editCandidat(_id: number) {
    this.router.navigate(['update', _id]);
    console.log(_id);
  }


   listesCandidat() {  
   this.router.navigate(['/candidats'])
  }
  }

