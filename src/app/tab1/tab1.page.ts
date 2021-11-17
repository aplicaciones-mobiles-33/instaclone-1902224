import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {map } from 'rxjs/operators';

//httpModule
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{

  publicaciones =  [];

  constructor(private http : HttpClient) {}
  cargarFeed(): void {

    this.http.get('https://insta-clone-app-e762f-default-rtdb.firebaseio.com/publicaciones.json')

    .pipe(

      map( responseData => {

        for(const key in responseData) {

          this.publicaciones.push( { ...responseData[key], key});

        } return this.publicaciones;

      })

    ).subscribe(responseData => {

      console.log(responseData);

    })

  }




  ngOnInit(): void {

    this.cargarFeed();

  }

} 