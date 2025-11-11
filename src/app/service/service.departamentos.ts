import { Injectable } from "@angular/core";
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Departamento } from "../models/departamento";
import { environment } from "../../environments/environment.development";

@Injectable()
export default class ServiceDepartamentos{
    constructor (private _http:HttpClient){}

    getDepartamentos() : Observable<Array<Departamento>>{
        let request = "api/departamentos"
        let url = environment.apiDepartamentos + request;
        return this._http.get<Array<Departamento>>(url);
    }

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
}