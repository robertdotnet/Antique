import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { MentaldisorderComponent } from './pages/mentaldisorder/mentaldisorder.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: '#', component: HomeComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'music', component: MusicComponent
    },
    {
        path: 'mentaldisorder', component: MentaldisorderComponent
    }
];

export const routing  = RouterModule.forRoot(routes);
