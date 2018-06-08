import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { MovieComponent } from './movie/movie.component';

import { CONST_ROUTING } from './app.routing';

import { SharedService } from './shared.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddressComponent } from './address/address.component';
import { ChatComponent } from './chat/chat.component';

import { AgePipe } from './movie/movie.pipe';
import { HiddenDirective } from './movie/movie.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    CurrencyComponent,
    MovieComponent,
    AboutUsComponent,
    AddressComponent,
    ChatComponent,
    AgePipe,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CONST_ROUTING
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
