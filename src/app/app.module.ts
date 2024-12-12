import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CursoelComponent } from './cursoel/cursoel.component';
import { CardComponent } from './card/card.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursoelComponent,
    CardComponent,
    FaqComponent,
    FooterComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
