import { Component, OnInit } from '@angular/core';
import { isNil } from 'lodash';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styles: []
})
export class StartComponent implements OnInit {

  public modules: any[];
  constructor() {
    this.modules = isNil(localStorage.getItem('core')) ? [] : JSON.parse(localStorage.getItem('core')).menu.opciones;
  }

  ngOnInit() {
  }

}
