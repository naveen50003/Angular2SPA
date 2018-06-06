import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { MovieComponent } from './movie/movie.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddressComponent} from './address/address.component';
import { ChatComponent } from './chat/chat.component';

const MAINMENU_ROUTES: Routes = [
    { path: '', redirectTo: '/weather', pathMatch: 'full'},
    {path : 'weather', component: WeatherComponent},
    {path : 'movie' , component: MovieComponent},
    {path : 'currency' , component : CurrencyComponent},
    {path : 'about',
        component: AboutUsComponent,
        children : [
            {path : '',  redirectTo: 'address', pathMatch: 'full'},
            {path : 'address', component : AddressComponent},
            {path : 'chat' , component : ChatComponent, outlet: 'aux' }
        ]
    }
];

export const CONST_ROUTING  = RouterModule.forRoot(MAINMENU_ROUTES);
