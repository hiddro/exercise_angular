import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-form-personajes',
  templateUrl: './form-personajes.component.html',
  styleUrls: ['./form-personajes.component.css']
})
export class FormPersonajesComponent implements OnInit {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // @Output()
  // onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  agregar(){//event: any
    // event.preventDefault(); //para no refrescar
    if(this.nuevo.nombre.trim().length == 0){
      return;
    }

    // this.personajes.push(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo ={
      nombre: '',
      poder: 0
    }
  }

}
