import { Component } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {


 
  constructor( private router: Router ) { }

 
  // Ceci est une fonction qui renvoi au formulaire de candidat
  addCandidat() {
    this.router.navigate(['+ Ajouter un candidat'])
  }

  // ici je vais ajouter 3 fonctions pour mes collegues afin de creer le lien des boutons vers les pages ADD-offre de stage-demande de stage/ entreprise


}


