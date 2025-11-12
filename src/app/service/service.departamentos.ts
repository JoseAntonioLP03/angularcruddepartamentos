import { Injectable } from "@angular/core";
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Departamento } from "../models/departamento";
import { environment } from "../../environments/environment.development";

@Injectable()
export default class ServiceDepartamentos{
    constructor (private _http:HttpClient){}

    //GET DEPERATAMENTOS
    getDepartamentos() : Observable<Array<Departamento>>{
        let request = "api/departamentos"
        let url = environment.apiDepartamentos + request;
        return this._http.get<Array<Departamento>>(url);
    }

    //CREATE DEPARTAMENTO
    createDepartamento(departamento:Departamento):Observable <any>{
        let json = JSON.stringify(departamento);
        //CREAMOS LA CABECERA DE LA PETICION
        let header = new HttpHeaders();
        //INDICAMOS EL TIPO DE OBJETO A ENVIAR EN DATA
        header = header.set("Content-type","application/json");
        let request = "api/departamentos"
        let url = environment.apiDepartamentos + request;
        return this._http.post(url,json,{headers:header})
    }

    //ENCONTRAR DEPARTAMENTO
    findDepartamento(idDepartamento:number):Observable<Departamento>{
        let request = "api/departamentos/"+idDepartamento;
        let url = environment.apiDepartamentos + request;
        return this._http.get<Departamento>(url);
    }

    //EDITAR DEPARTAMENTO
    updateDepartamento(departamento:Departamento):Observable<any>{
        let json = JSON.stringify(departamento);
        let header = new HttpHeaders().set("Content-type","application/json");
        let request = "api/departamentos"
        let url = environment.apiDepartamentos + request;
        return this._http.put(url,json,{headers:header});
    }

    //DELETE DEPARTAMENTO
    deleteDepartamento(idDepartamento:number):Observable<any>{
        let request = "api/departamentos/" + idDepartamento
        let url = environment.apiDepartamentos + request
        return this._http.delete(url)

    }
}