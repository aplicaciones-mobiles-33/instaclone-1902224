import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private db: FirebaseDbService) {


  }
  editando: boolean = false;
  bio: String;
  nombre: String;
  seguidores: number;
  siguiendo: number;

  obtenerPerfil() : void {
    this.db.getPerfilUsuario().subscribe(res => {
      console.log(res);
      let perfilUsuario = Object.assign(res);
      this.bio = perfilUsuario.bio;
      this.nombre = perfilUsuario.nombre;
      this.seguidores = perfilUsuario.seguidores;
      this.siguiendo = perfilUsuario.siguiendo;
    })
  }


  obtenerPublicaciones() :void {
    this.db.getPublicaciones().subscribe(res => {
      console.log(res);
   })
  }

  toggleEditar(): void {
    this.editando = !this.editando;
  }
  
  ngOnInit() {
    this.obtenerPerfil();

    this.obtenerPublicaciones;
  }

}
