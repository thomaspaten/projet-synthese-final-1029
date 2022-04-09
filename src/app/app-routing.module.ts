import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FicheCandidatComponent } from './fiche-candidat/fiche-candidat.component';
import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';
import { FormMajCandidatComponent } from './form-maj-candidat/form-maj-candidat.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EntreprisesDetailsComponent } from './entreprises-details/entreprises-details.component';
import { AjoutEntrepriseComponent } from './ajout-entreprise/ajout-entreprise.component';

const routes: Routes = [

  { path: 'candidats', component: ListeDesCandidatsComponent },
  { path: 'candidat/:_id', component: FicheCandidatComponent  },
  { path: 'update/:id', component: FormMajCandidatComponent },
  { path: 'ajouter-un-candidat', component: FormAjoutCandidatComponent },
  { path: 'candidats', component: ListeDesCandidatsComponent },
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'entreprises', component: EntreprisesComponent },
  { path: 'entreprises-details', component: EntreprisesDetailsComponent },
  { path: 'form-ajout-candidat', component: FormAjoutCandidatComponent },
  {path: 'ajout-entreprise', component: AjoutEntrepriseComponent}




    // ici il va falloir ajouter les routes du sidebar pour que chacuns des boutons renvoient à la bonne page
    // va falloir aussi rajouter les bonnes références dans la page sidebar.componant.html    


]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
