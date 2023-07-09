import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  // Recibimos la tabla
  @Input() tabla: any;
  // Enviamos la información a los inputs
  @Output() cambiarInput = new EventEmitter<any>();
  // Creamos un método que elimine de la array el elemento seleccionado
  borrar(codigo:number){
    // Buscamos el codigo en la array y, al encontrarlo, eliminamos su posicion
    for (let i = 0; i < this.tabla.length; i++) {
      if(this.tabla[i].codigo == codigo){
        this.tabla.splice(i, 1);
      }
    }
  }
  // Creamos un método que, al seleccionar uno de los objetos de la tabla, modifique los inputs del formulario para que aparezca la información de este
  seleccionar(form: any){
    let codigo = form.codigo;
    let descripcion = form.descripcion;
    let precio = form.precio;
    // Emitimos la información a los inputs
    this.cambiarInput.emit({codigo, descripcion, precio});

  }

}
