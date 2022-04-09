import { Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Candidat } from '../candidat';
import { CandidatService } from '../candidat.service';



@Component({
  selector: 'app-form-ajout-candidat',
  templateUrl: './form-ajout-candidat.component.html',
  styleUrls: ['./form-ajout-candidat.component.sass']
})
export class FormAjoutCandidatComponent implements OnInit {

  @Input() candidat: Candidat = {__id: '', name: '', description: '', jobTitle: '', email: '', phone: '', address: '', city: '', province: '', postalCode: '', published: true};


  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
  }

}
