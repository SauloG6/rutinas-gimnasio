import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DetalleEjercicioService {
  constructor() {
  }

  private http = inject(HttpClient)

  guardarRutinas(){
    this.http.post
  }



}
