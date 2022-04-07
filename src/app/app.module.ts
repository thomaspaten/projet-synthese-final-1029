import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CandidatService } from './candidat.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';
import { FicheCandidatComponent } from './fiche-candidat/fiche-candidat.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormMajCandidatComponent } from './form-maj-candidat/form-maj-candidat.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListeDesCandidatsComponent,
    FormAjoutCandidatComponent,
    FicheCandidatComponent,
    SidebarComponent,
    NavbarComponent,
    FormMajCandidatComponent,
    ConfirmationDialogComponent,
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
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    
    ],

    // schemas:[ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  // a remettre candidatService dans providers apres
  providers: [CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
