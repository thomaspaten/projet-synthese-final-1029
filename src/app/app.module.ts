import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DemandeStageService } from './demande-stage.service';
import { TableDemandeStageComponent } from './table-demande-stage/table-demande-stage.component';
import { FormDemandeStageComponent } from './form-demande-stage/form-demande-stage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VoirDemandeStageComponent } from './voir-demande-stage/voir-demande-stage.component';
import { ModifDemandeStageComponent } from './modif-demande-stage/modif-demande-stage.component';
import { AjoutDemandeStageComponent } from './ajout-demande-stage/ajout-demande-stage.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TableDemandeStageComponent,
    FormDemandeStageComponent,
    VoirDemandeStageComponent,
    ModifDemandeStageComponent,
    AjoutDemandeStageComponent
  ],
  imports: [
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
    MatCheckboxModule
  ],
  providers: [DemandeStageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
