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

import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EntreprisesDetailsComponent } from './entreprises-details/entreprises-details.component';
import { IdentificationComponent } from './identification/identification.component';

// Services

import { CandidatService } from './candidat.service';
import { IdentificationService } from './identification.service';


@NgModule({
  declarations: [
    AppComponent,
    ListeDesCandidatsComponent,
    FormAjoutCandidatComponent,
    EntreprisesComponent,
    EntreprisesDetailsComponent,
    IdentificationComponent
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
  providers: [CandidatService,IdentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
