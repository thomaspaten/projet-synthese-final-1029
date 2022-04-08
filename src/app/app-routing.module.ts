import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutDemandeStageComponent } from './ajout-demande-stage/ajout-demande-stage.component';
import { ModifDemandeStageComponent } from './modif-demande-stage/modif-demande-stage.component';
import { VoirDemandeStageComponent } from './voir-demande-stage/voir-demande-stage.component';
import { TableDemandeStageComponent } from './table-demande-stage/table-demande-stage.component';

const routes: Routes = [
  { path: 'ajoutDemande', component: AjoutDemandeStageComponent},
  { path: 'voirDemande', component: VoirDemandeStageComponent},
  { path: 'modifDemande/:_id', component: ModifDemandeStageComponent},
  { path: 'tableDemande', component: TableDemandeStageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
