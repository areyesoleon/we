import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public core: any;
  constructor() { }
  ngOnInit() {
    this.core = {
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
  }

}
