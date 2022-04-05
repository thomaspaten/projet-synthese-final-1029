import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DemandeStage } from './demande-stages';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DemandeStageService {
  demandeStageUrl = 'https://projet-synthese-api.herokuapp.com/api/0335324/internship-request/';

  constructor(private http: HttpClient) { }

  getDemandeStages(): Observable<DemandeStage[]> {
    return this.http.get<DemandeStage[]>(this.demandeStageUrl);
  }

  ajoutDemandeStage(demandeStage: DemandeStage): Observable<DemandeStage> {
    return this.http.post<DemandeStage>(this.demandeStageUrl, demandeStage, httpOptions)
  }

  majDemandeStage(demandeStage: DemandeStage): Observable<DemandeStage> {
    return this.http.put<DemandeStage>(this.demandeStageUrl + "_id" + demandeStage._id, demandeStage, httpOptions);
  }

  supprDemandestage(id: String): Observable<DemandeStage> {
    return this.http.delete<DemandeStage>(this.demandeStageUrl + "_id" + id);
  }

}
