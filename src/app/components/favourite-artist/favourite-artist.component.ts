import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Artist} from "../../models/artist";

@Component({
  selector: 'app-favourite-artist',
  templateUrl: './favourite-artist.component.html',
  styleUrls: ['./favourite-artist.component.css'],
  providers: [ApiService]
})
export class FavouriteArtistComponent implements OnInit {

  constructor(private _apiService:ApiService) { }

  listOfFavouriteArtists: Artist[];

  ngOnInit() {
    this.getAllFavouriteArtist();
  }

  getAllFavouriteArtist(){
    this._apiService.getAllFavouriteArtists().subscribe(res => {
      this.listOfFavouriteArtists = res;
    })
  }

  deleteFavouriteArtist(artist: Artist) {
    if (confirm("Are you sure you want to delete the Artist?")) {
      this._apiService.deleteFavouriteArtist(artist.id).subscribe(res => {
        let idOfArtist = this.listOfFavouriteArtists.indexOf(artist);
        this.listOfFavouriteArtists.splice(idOfArtist, 1);
      })
    }
  }

}
