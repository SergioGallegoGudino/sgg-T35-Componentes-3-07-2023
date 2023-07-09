import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes-3-sgallego';
  // Creamos una array para guardar cada formulario en una posicion
  tabla: any[] = [];
  // Creamos un boolean que comprobará que el codigo ya exista o no en la tabla
  valido: boolean = true;
  codigo:any;
  descripcion:any;
  precio:any;
  // Creamos un metodo que añada los datos introducidos en la tabla, no sin antes comprobar que su codigo esté disponible
  anadir(form: any){

    this.valido = true;

    const formDatos = {codigo: form.codigo, descripcion: form.descripcion, precio: form.precio};
    for (let i = 0; i < this.tabla.length; i++) {
      // Si el codigo ya se encuentrá en la tabla, no es válido y por lo tanto cambiamos el boolean a false
      if(this.tabla[i].codigo == formDatos.codigo){
        this.valido = false;
      }
    }
    // Si el codigo es válido se añade los datos a la array, si no es válido el programa nos avisará del error
    if(this.valido){
      this.tabla.push(formDatos);
    } else{
      alert("El codigo del producto ya existe en la base de datos, intentélo con otro codigo");
    }

  }
  // Creamos un método que busca en la array el codigo del producto y, si lo encuentra, modifica los demás datos 
  modificar(form: any){
    const formDatos = {codigo: form.codigo, descripcion: form.descripcion, precio: form.precio};
    for (let i = 0; i < this.tabla.length; i++) {
      if(this.tabla[i].codigo == formDatos.codigo){
        this.tabla[i] = formDatos;
      }
    }
  }
  // Creamos un método que reciba los datos del hijo seleccionado
  recibirDatos(datos:any){
    this.codigo = datos.codigo;
    this.descripcion = datos.descripcion;
    this.precio = datos.precio;
  };

}
