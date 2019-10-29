import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavouriteTrackComponent } from './components/facouriteTrack/favourite-track.component';
import { FavouriteArtistComponent } from './components/favourite-artist/favourite-artist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import {RouterModule, Routes} from "@angular/router";
import {ApiService} from "./services/api.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


const appRouts: Routes = [
  {path: '', component: SearchComponent},
  {path: 'favouriteArtist', component: FavouriteArtistComponent},
  {path: 'favouriteTrack', component: FavouriteTrackComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FavouriteTrackComponent,
    FavouriteArtistComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRouts), FormsModule, HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
