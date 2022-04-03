import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {
nomEtPrenom: string = '';

ajoutNomEtPrenom(nomEtPrenom: string){
  this.nomEtPrenom = nomEtPrenom
  window.alert(`Le nom est : ${nomEtPrenom}`);
}

obtenirNomEtPrenom():string{
  return this.nomEtPrenom
}


  constructor() { }
}
