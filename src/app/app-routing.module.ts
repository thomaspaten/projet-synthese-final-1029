import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FicheCandidatComponent } from './fiche-candidat/fiche-candidat.component';
import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';
import { FormMajCandidatComponent } from './form-maj-candidat/form-maj-candidat.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'candidats' },
  { path: 'candidats', component: ListeDesCandidatsComponent },
  { path: 'candidat/:_id', component: FicheCandidatComponent  },
  { path: 'update/:id', component: FormMajCandidatComponent },
  { path: '+ Ajouter un candidat', component: FormAjoutCandidatComponent },
  { path: 'Candidats', component: ListeDesCandidatsComponent },

    // ici il va falloir ajouter les routes du sidebar pour que chacuns des boutons renvoient à la bonne page
    // va falloir aussi rajouter les bonnes références dans la page sidebar.componant.html    


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
