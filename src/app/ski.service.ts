import { Injectable } from '@angular/core';
import {NombreSkieurModel} from "../../Models/NombreSkieurModel";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions ={
  headers :new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SkiService {

  constructor(private http: HttpClient) { }

  nombreSkieursParCouleurPiste = 'http://192.168.56.102:8089/stationSki/skieur/nombreSkieursParCouleurPiste';

  getNombreSkieursParCouleurPiste()
  {
    return this.http.get<NombreSkieurModel>(this.nombreSkieursParCouleurPiste,httpOptions);
  }

}
