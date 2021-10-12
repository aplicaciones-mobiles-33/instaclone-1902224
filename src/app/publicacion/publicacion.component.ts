import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {

  idPublicacion: number;
  
  constructor(private RutaActiva: ActivatedRoute) { }

  ngOnInit() {

    this.idPublicacion = this.RutaActiva.snapshot.params.publicacionId;
    console.log(this.idPublicacion);

    //this.idPublicacion = this.RutaActiva.snapshot.params.id;
    //console.log(this.idPublicacion);
  }

}
