import {Component, OnInit} from '@angular/core';
import {SkiService} from "../ski.service";
import {NombreSkieurModel} from "../../../Models/NombreSkieurModel";
import {HttpEvent} from "@angular/common/http";

@Component({
  selector: 'app-ski-page',
  templateUrl: './ski-page.component.html',
  styleUrls: ['./ski-page.component.scss']
})
export class SkiPageComponent implements  OnInit {


  constructor(public service: SkiService) {
  }

  colors: NombreSkieurModel;

  ngOnInit(): void {
    this.service.getNombreSkieursParCouleurPiste().subscribe(data => {
      this.colors = data;
    });
  }

}
