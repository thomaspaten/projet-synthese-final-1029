import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EntreprisesService } from '../entreprises.service';

@Component({
  selector: 'app-entreprises-details',
  templateUrl: './entreprises-details.component.html',
  styleUrls: ['./entreprises-details.component.sass']
})
export class EntreprisesDetailsComponent implements OnInit {

// https://www.angularjswiki.com/angular/get-query-parameters-in-angular/
// Prendre query param pas query param map .
  constructor(private activatedRoute: ActivatedRoute, private EntreprisesService: EntreprisesService, private RouterModule: RouterModule) {

   }

  ngOnInit(): void {
  }

}
