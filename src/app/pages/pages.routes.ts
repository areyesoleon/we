import { RouterModule, Routes } from "@angular/router";
import { StartComponent } from "./start/start.component";

const pagesRoutes: Routes = [
  { path: 'modules', component: StartComponent},
  { path: '', redirectTo: '/modules', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);