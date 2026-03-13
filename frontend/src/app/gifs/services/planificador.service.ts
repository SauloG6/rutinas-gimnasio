import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Planificador } from '../interfaces/planificador.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({providedIn: 'root'})
export class PlanificadorService {
  constructor() {
   }

  private http = inject(HttpClient)
  plan = signal<Planificador[]>([])

  cargarPlan(id_rutina: number){
    this.http.get<Planificador[]>(`${environment.Url}/planificador/${id_rutina}`).subscribe(
      (resp)=>{
        const plan = resp
        this.plan.set(plan)
      }
    )
  }
}
