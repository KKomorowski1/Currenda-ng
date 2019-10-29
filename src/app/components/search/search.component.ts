import { Component, OnInit } from '@angular/core';
import {Track} from "../../models/track";
import {Artist} from "../../models/artist";
import {ApiService} from "../../services/api.service";
import {Artists} from "../../models/artists";
import {Tracks} from "../../models/Tracks";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [ApiService]
})
export class SearchComponent {
  searchStrArtist: string;
  searchStrTrack: string;
  searchResArtist: Artists[];
  searchResTrack: Tracks[];
  artist:Artist;
  artistsList: Artist[] = [];
  tracksList: Track[] = [];
  track:Track;

  constructor(private _apiService:ApiService) {
  }

  searchArtist() {
        this._apiService.getAllArtists(this.searchStrArtist)
          .subscribe(res => {
            console.log(res);
            this.searchResArtist = res;
          })
  }

  searchTrack() {
    this._apiService.getAllTracks(this.searchStrTrack)
      .subscribe(res => {
        console.log(res);
        this.searchResTrack = res;
      })
  }

  addFavouriteArtist(artist: string){
    let newFavourite: Artist = {
      name: artist,
      id: null
    };

    this._apiService.addFavouriteArtist(newFavourite).subscribe(res=>{
      newFavourite.name = res.name;
      this.artistsList.push(newFavourite)
    })
  }




  addFavouriteTrack(track: string){
    let newFavouriteTrack: Track = {
      name: track,
      id: null
    };

    this._apiService.addFavouriteTrack(newFavouriteTrack).subscribe(res=>{
      newFavouriteTrack.name = res.name;
      this.tracksList.push(newFavouriteTrack)
    })
  }
}
