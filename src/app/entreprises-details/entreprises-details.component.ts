import { EntreprisesService } from '../entreprises.service';
import { Entreprise } from '../entreprise';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entreprises-details',
  templateUrl: './entreprises-details.component.html',
  styleUrls: ['./entreprises-details.component.sass']
})
export class EntreprisesDetailsComponent implements OnInit {
  entreprise!: Entreprise;
  _id!: number;

  constructor(private activatedRoute: ActivatedRoute, private EntreprisesService: EntreprisesService, private Router: Router, private route: ActivatedRoute) {

   }
  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];
    this.EntreprisesService.ObtenirEntreprise(this._id).subscribe(data => {
      console.log(data)
      this.entreprise = data;
      }, error => console.log(error));
  }
}
