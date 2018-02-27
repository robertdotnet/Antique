import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';

const routes :Routes = [
    {
        path:"", component: HomeComponent
    },
    {
        path:"#", component: HomeComponent
    },
    {
        path:"home", component: HomeComponent
    },
    {
        path:"music", component: MusicComponent
    }
]

export const routing  = RouterModule.forRoot(routes);