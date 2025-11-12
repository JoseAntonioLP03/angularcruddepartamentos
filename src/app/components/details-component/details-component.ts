import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Params, Route, Router } from '@angular/router';
import { Departamento } from '../../models/departamento';
import ServiceDepartamentos from '../../service/service.departamentos';

@Component({
  selector: 'app-details-component',
  standalone: false,
  templateUrl: './details-component.html',
  styleUrl: './details-component.css',
})
export class DetailsComponent implements OnInit{

  public departamento!: Departamento;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _service:ServiceDepartamentos,
    private _router:Router

  ) {}
  

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      let id = parseInt(params["id"]);
      let nombre = params["nombre"];
      let localidad = params["localidad"];
      this.departamento = new Departamento(id,nombre,localidad);
    })
  }

  deleteDepartamento(idDepartamento:number):void {
    this._service.deleteDepartamento(idDepartamento).subscribe(response=>{
      console.log("Eliminado")
      this._router.navigate(["/"])
    }) 
  }
  
}
