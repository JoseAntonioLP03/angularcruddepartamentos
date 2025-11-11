import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import ServiceDepartamentos from '../../service/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-component',
  standalone: false,
  templateUrl: './create-component.html',
  styleUrl: './create-component.css',
})
export class CreateComponent {
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _service:ServiceDepartamentos,
    private _router:Router
  ){}

  insertDepartamento():void {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let departamento = new Departamento(id,nombre,localidad);

    this._service.createDepartamento(departamento).subscribe(response => {
      console.log("Insertado");
      //NAVIGATE PARA REDIRECCIONAR
      this._router.navigate(["/"]);
    })


  }
}
