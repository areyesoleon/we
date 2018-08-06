import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatExpansionModule } from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatExpansionModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatExpansionModule],
})
export class MaterialModule { }