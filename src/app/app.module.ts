// Modules

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


// Composants

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EntreprisesDetailsComponent } from './entreprises-details/entreprises-details.component';
import { IdentificationComponent } from './identification/identification.component';
import { LoginComponent } from './login/login.component';

// Services

import { CandidatService } from './candidat.service';
import { IdentificationService } from './identification.service';
import { EntreprisesService } from './entreprises.service';
import { AjoutEntrepriseComponent } from './ajout-entreprise/ajout-entreprise.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeDesCandidatsComponent,
    FormAjoutCandidatComponent,
    EntreprisesComponent,
    EntreprisesDetailsComponent,
    IdentificationComponent,
    LoginComponent,
    AjoutEntrepriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatInputModule,

  ],
  providers: [EntreprisesService,CandidatService,IdentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
