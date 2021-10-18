import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  // _historial: string[] = [];

  constructor(private gifsService: GifsService) { }

  get historial(){
    return this.gifsService.historial;
  }

  ngOnInit(): void {
    // this._historial = this.gifsService.historial;
  }

  buscar(termino: string){
    // console.log(termino);

    this.gifsService.buscarGifs(termino);
  }
}
