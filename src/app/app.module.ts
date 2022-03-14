import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CandidatService } from './candidat.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';










import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormAjoutCandidatComponent } from './form-ajout-candidat/form-ajout-candidat.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeDesCandidatsComponent,
    FormAjoutCandidatComponent,
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
  providers: [CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
