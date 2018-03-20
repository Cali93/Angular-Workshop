import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-preorders',
  templateUrl: './preorders.component.html',
  styleUrls: ['./preorders.component.scss']
})
export class PreordersComponent implements OnInit {
  panelOpenState: boolean;
  monElement: string;
  fakeConstruct: string;
  monBtn: string;
  fakeFunc: string;
  baliseCustom: string;
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor() {
    this.panelOpenState = false;
    this.monElement = '{{ Mon élément dynamique }}'
    this.fakeConstruct = 'constructor(){this.monElement = valeur}';
    this.monBtn = '<button mat-raised-button (click)="maFonction()"> GO </button>'
    this.fakeFunc = `maFonction(){ console.log('hello depuis la fonction du bouton')}`
    this.baliseCustom = '<anms-child></anms-child>'
   }

  ngOnInit() {
  }

}
