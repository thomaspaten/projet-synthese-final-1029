import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutOffreStageComponent } from './ajout-offre-stage/ajout-offre-stage.component';
import { ListeOffresStagesComponent } from './liste-offres-stages/liste-offres-stages.component';
import { MajOffreStageComponent } from './maj-offre-stage/maj-offre-stage.component';
import { OffreDetailComponent } from './offre-detail/offre-detail.component';

const routes: Routes = [
  { path: 'offres', component: ListeOffresStagesComponent },
  { path: 'offre/:_id', component: OffreDetailComponent},
  { path: 'maj-offre/:_id', component: MajOffreStageComponent},
  { path: 'ajout-offre', component: AjoutOffreStageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
