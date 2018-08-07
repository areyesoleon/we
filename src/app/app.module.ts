import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

//Menu
import { MenuModule } from './menu/menu.module';

//Modulos we
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MenuModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
