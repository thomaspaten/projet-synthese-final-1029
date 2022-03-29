import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeOffresStagesComponent } from './liste-offres-stages/liste-offres-stages.component';
import { OffreDetailComponent } from './offre-detail/offre-detail.component';

const routes: Routes = [
  { path: 'offres', component: ListeOffresStagesComponent },
  { path: 'offre/:_id', component: OffreDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
