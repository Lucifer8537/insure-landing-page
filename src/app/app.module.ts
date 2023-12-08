import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InsureMainComponent } from './insure-main/insure-main.component';
import { DifferentComponent } from './different/different.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderService } from './services/header.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InsureMainComponent,
    DifferentComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HeaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
