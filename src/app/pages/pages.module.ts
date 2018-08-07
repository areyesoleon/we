import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
import { RoutesComponent } from './routes/routes.component';
import { StartComponent } from './start/start.component';
import {OpcionModuleModule} from 'we-module';

@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES,
    OpcionModuleModule
  ],
  declarations: [RoutesComponent, StartComponent],
  exports: [RoutesComponent]
})
export class PagesModule { }
