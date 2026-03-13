import { Component, inject} from '@angular/core';
import { RutinasService } from '../../services/rutinas.service';
import { TarjetaRutina } from "../../components/tarjeta-rutina/tarjeta-rutina.component";
import { PlanificadorService } from '../../services/planificador.service';

@Component({
  selector: 'rutinas-page',
  templateUrl: './rutinas-page.component.html',
  imports: [TarjetaRutina]
})

export class RutinasPageComponent  {

  rutinasService = inject(RutinasService)
  planificadorService = inject (PlanificadorService)

}
