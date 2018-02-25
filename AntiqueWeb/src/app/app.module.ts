import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';


const appRoutes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'music',
    component:MusicComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path:'music', component:MusicComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }