import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor', 'Capitan America'];
  heroeB: string = '';
  borrarHeroe(): void{
    let heroeEliminado = this.heroes.shift() || '';
    this.heroeB = heroeEliminado;
    console.log(heroeEliminado);
  }
}
