import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  @Input('data') // sin nada dentro () por defecto es personajes
  personajes: Personaje[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
