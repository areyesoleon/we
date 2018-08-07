import { Component, OnInit } from '@angular/core';
import { isNil } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public core: any;
  constructor() {
    let core = {
      company: {
        name: 'We Home',
        id: '0'
      },
      user: {
        name: 'Andres Reyes',
        id: '0'
      },
      menu: {
        show: false,
        opciones: [
          {
            module: 'Configuración',
            icon: 'settings_applications',
            id:'configuracion',
            pages:[
              {
                name: 'Home',
                icon:'store'
              },
              {
                name: 'User',
                icon:'face'
              }
            ]
          }
        ]
      }
    }
    if(isNil(localStorage.getItem('core'))){
      localStorage.setItem('core', JSON.stringify(core));
      location.reload();
    } else {
      this.core = JSON.parse(localStorage.getItem('core'));
    }
  }
  ngOnInit() {}
}
