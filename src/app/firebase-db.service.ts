import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { AngularFireDatabase } from '@angular/fire/compat/database';
//import {Firestore, collection, collectionData} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(
    private http: HttpClient,
    private fbdb: AngularFireDatabase
    ) { }
      

  resArray = [];

  //Publicaciones
  getPublicaciones() {
    return this.http.get('https://insta-clone-app-e762f-default-rtdb.firebaseio.com/publicaciones.json')
    .pipe(
      map(res => {
        for(const key in res) {
          this.resArray.push( { ...res[key], key});
        }return this.resArray;
      })
    )
  }

  getPublicacion(idPost) {
    return this.http.get('https://insta-clone-app-e762f-default-rtdb.firebaseio.com/publicaciones/' + idPost + '.json');
  }

  postPublicacion(infoPost) {
    return this.http.post('https://insta-clone-app-e762f-default-rtdb.firebaseio.com/publicaciones.json', infoPost);
  }

  deletePost(idPost) {
    return this.http.delete('https://insta-clone-app-e762f-default-rtdb.firebaseio.com/publicaciones/' + idPost + '.json');
  }

  updatePost(idPost, infoPost) {
    return this.http.put('https://insta-clone-app-e762f-default-rtdb.firebaseio.com/publicaciones/' + idPost + '.json', infoPost);
  }


  //Perfil Usuario
  getPerfilUsuario() {
    return this.http.get('https://insta-clone-app-e762f-default-rtdb.firebaseio.com/usuario.json');
  }

  updateBioUsuario(nuevaBio) {
    return this.http.put('https://insta-clone-app-e762f-default-rtdb.firebaseio.com/usuario/bio.json', nuevaBio);
  }

  updateNombreUsuario(nuevoNombreUsuario) {
    return this.http.get('https://insta-clone-app-e762f-default-rtdb.firebaseio.com/usuario/nombre.json', nuevoNombreUsuario);
  }

  getPublicacionesUsuario() {
    return this.fbdb.list('/publicaciones', ref => ref.orderByChild('usuario').equalTo('luzdeleon'));
  }

}
