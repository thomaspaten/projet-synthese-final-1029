import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {     AccueilComponent } from './accueil/accueil.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EntreprisesDetailsComponent } from './entreprises-details/entreprises-details.component';

const routes: Routes = [
  {path:'', component:AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'entreprises', component: EntreprisesComponent },
  { path: 'entreprises-details', component: EntreprisesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
