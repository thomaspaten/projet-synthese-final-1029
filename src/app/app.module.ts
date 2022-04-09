// Modules

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Composants

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DemandeStageService } from './demande-stage.service';
import { TableDemandeStageComponent } from './table-demande-stage/table-demande-stage.component';
import { FormDemandeStageComponent } from './form-demande-stage/form-demande-stage.component';
import { VoirDemandeStageComponent } from './voir-demande-stage/voir-demande-stage.component';
import { ModifDemandeStageComponent } from './modif-demande-stage/modif-demande-stage.component';
import { AjoutDemandeStageComponent } from './ajout-demande-stage/ajout-demande-stage.component';

import { AccueilComponent } from './accueil/accueil.component';
import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';
import { FicheCandidatComponent } from './fiche-candidat/fiche-candidat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormMajCandidatComponent } from './form-maj-candidat/form-maj-candidat.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { EntreprisesDetailsComponent } from './entreprises-details/entreprises-details.component';
import { IdentificationComponent } from './identification/identification.component';

// Services

import { CandidatService } from './candidat.service';
import { IdentificationService } from './identification.service';
import { EntreprisesService } from './entreprises.service';
import { AjoutEntrepriseComponent } from './ajout-entreprise/ajout-entreprise.component';


@NgModule({
  declarations: [
    AppComponent,
    TableDemandeStageComponent,
    FormDemandeStageComponent,
    VoirDemandeStageComponent,
    ModifDemandeStageComponent,
    AjoutDemandeStageComponent,
    AccueilComponent,
    ListeDesCandidatsComponent,
    FormAjoutCandidatComponent,
    FicheCandidatComponent,
    SidebarComponent,
    NavbarComponent,
    FormMajCandidatComponent,
    ConfirmationDialogComponent,
    EntreprisesComponent,
    EntreprisesDetailsComponent,
    IdentificationComponent,
    AjoutEntrepriseComponent
  ],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FlexLayoutModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule
  ],  
  providers: [EntreprisesService,CandidatService,IdentificationService, DemandeStageService],

  // schemas:[ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  // a remettre candidatService dans providers apres

  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
  }
}
