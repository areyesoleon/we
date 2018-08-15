import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
import { RoutesComponent } from './routes/routes.component';
import { StartComponent } from './start/start.component';
import {OpcionModuleModule} from 'we-module';
import { ConfigurationModule } from 'we-configuration'

@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES,
    OpcionModuleModule,
    ConfigurationModule
  ],
  declarations: [RoutesComponent, StartComponent],
  exports: [RoutesComponent]
})
export class PagesModule { }
