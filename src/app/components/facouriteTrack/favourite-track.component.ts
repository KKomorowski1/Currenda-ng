import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Track} from "../../models/track";

@Component({
  selector: 'app-favourite-track',
  templateUrl: './favourite-track.component.html',
  styleUrls: ['./favourite-track.component.css'],
  providers: [ApiService]
})
export class FavouriteTrackComponent implements OnInit{

  constructor(private _apiService: ApiService) {
  }

  listOfFavouriteTracks: Track[];

  ngOnInit(): void {
    this.getAllFavouriteTracks();
  }

  getAllFavouriteTracks(){
    this._apiService.getAllFavouriteTracks().subscribe(res => {
      this.listOfFavouriteTracks = res;
    })
  }

  deleteFavouriteTrack(track: Track) {
    if (confirm("Are you sure you want to delete the Track?")) {
      this._apiService.deleteFavouriteTrack(track.id).subscribe(res => {
        let idOfTrack = this.listOfFavouriteTracks.indexOf(track);
        this.listOfFavouriteTracks.splice(idOfTrack, 1);
      })
    }
  }
}
