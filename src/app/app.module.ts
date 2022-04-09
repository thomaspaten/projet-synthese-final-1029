import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CandidatService } from './candidat.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog' ;'@material/button';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';
import { ListeOffresStagesComponent } from './liste-offres-stages/liste-offres-stages.component';
import { OffreStageService } from './offre-stage.service';
import { MessageserviceComponent } from './messageservice/messageservice.component';
import { OffreDetailComponent } from './offre-detail/offre-detail.component';
import { MajOffreStageComponent } from './maj-offre-stage/maj-offre-stage.component';
import { AjoutOffreStageComponent } from './ajout-offre-stage/ajout-offre-stage.component';
import { ConfirmDialogOffrestageComponent } from './confirm-dialog-offrestage/confirm-dialog-offrestage.component';

// const appRoute: Routes = [
//   {path: 'liste', component: ListeOffresStagesComponent},
//   {path: 'liste/view/:id', component: VueOffreStageComponent},
// ]
@NgModule({
  declarations: [
    AppComponent,
    ListeDesCandidatsComponent,
    FormAjoutCandidatComponent,
    ListeOffresStagesComponent,
    MessageserviceComponent,
    OffreDetailComponent,
    MajOffreStageComponent,
    AjoutOffreStageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
    
    
  ],
  providers: [CandidatService, OffreStageService],
  // declarations: [AppComponent, ConfirmDialogOffrestageComponent],
  entryComponents: [ConfirmDialogOffrestageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
