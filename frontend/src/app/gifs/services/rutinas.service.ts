import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Rutinas } from '../interfaces/rutinas.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({providedIn: 'root'})
export class RutinasService {
  constructor() {
    this.cargarRutinas()
  }
  private http = inject(HttpClient)
  rutinas = signal<Rutinas[]>([])

  cargarRutinas(){
    this.http.get<Rutinas[]>(`${environment.Url}/rutinas`).subscribe((resp) => {
      //1. Obtengo los datos del URL
      const data = resp
      this.rutinas.set(data)
      console.log(data)
    })
  }
}
