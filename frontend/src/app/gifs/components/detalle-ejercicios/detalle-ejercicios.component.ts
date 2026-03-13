import { Component, output} from '@angular/core';
import { DetalleEjercicio } from '../../interfaces/detalle-ejercicios.interface';

@Component({
  selector: 'detalle-ejercicios',
  templateUrl: './detalle-ejercicios.component.html'
})

export class DetalleEjerciciosComponent {
  constructor() {}
  detalleEjercicio = output<DetalleEjercicio>()




}
