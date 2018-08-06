import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class MenuModule { }
