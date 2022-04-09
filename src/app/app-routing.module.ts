import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutDemandeStageComponent } from './ajout-demande-stage/ajout-demande-stage.component';
import { ModifDemandeStageComponent } from './modif-demande-stage/modif-demande-stage.component';
import { VoirDemandeStageComponent } from './voir-demande-stage/voir-demande-stage.component';
import { TableDemandeStageComponent } from './table-demande-stage/table-demande-stage.component';

import { AccueilComponent } from './accueil/accueil.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EntreprisesDetailsComponent } from './entreprises-details/entreprises-details.component';
import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { AjoutEntrepriseComponent } from './ajout-entreprise/ajout-entreprise.component';

const routes: Routes = [
  { path: 'ajoutDemande', component: AjoutDemandeStageComponent},
  { path: 'voirDemande/:_id', component: VoirDemandeStageComponent},
  { path: 'modifDemande/:_id', component: ModifDemandeStageComponent},
  { path: 'tableDemande', component: TableDemandeStageComponent},
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'entreprises', component: EntreprisesComponent },
  { path: 'entreprises-details', component: EntreprisesDetailsComponent },
  { path: 'form-ajout-candidat', component: FormAjoutCandidatComponent },
  { path: 'liste-candidats', component: ListeDesCandidatsComponent},
  {path: 'ajout-entreprise', component: AjoutEntrepriseComponent}
]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
