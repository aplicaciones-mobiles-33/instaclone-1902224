import { Component, OnInit } from '@angular/core';
import { PublicacionRoutingModule } from '../publicacion/publicacion-routing.module';
import { HttpClient } from '@angular/common/http';
import * as data from '../../assets/feed.json';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

export interface Publicaciones{
  imagen: String;
  id: number;
}

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  publicacionesArreglo: Publicaciones[] = [];

  //publicaciones: {id: number, usuario: String, imagenPost: String, avatarUsuario: string,  descripcionPost: String}[] = publicaciones;
   datos =  data;

   datosUsuario: any = this.datos.usuario;

   publicaciones: any = this.datos.publicaciones;

  ngOnInit() {



  }


  /*
  publicacionesArreglo: Publicaciones[] = [
    {
      imagen: '../assets/images/Post 1.jpg',
      id: 1
    },
    {
      imagen: '../assets/images/Post 2.png',
      id: 3
    },
    {
      imagen: '../assets/images/Post 3.png',
      id: 2
    }
  ] */

}