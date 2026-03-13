import { Component, input, Output, output } from '@angular/core';
import { Rutinas } from '../../interfaces/rutinas.interface';
import { Planificador } from '../../interfaces/planificador.interface';

@Component({
  selector: 'tarjeta-rutina',
  templateUrl: './tarjeta-rutina.component.html'
})

export class TarjetaRutina  {

  rutinas = input.required<Rutinas[]>()
  plan = input.required<Planificador[]>()
  rutinaSeleccionada = output<number>()
  ejercicioSeleccionado = output<Event>()

  onSeleccionarRutina(event: Event){
    //Extraer el elemento seleccionado
    const selectElement = event.target as HTMLSelectElement
    //Obtener el id de la rutina
    const id_rutina = Number(selectElement.value)
    //Le informamos al padre
    this.rutinaSeleccionada.emit(id_rutina)

  }

  onBotonRegistrar(event: Event){
  }



}
