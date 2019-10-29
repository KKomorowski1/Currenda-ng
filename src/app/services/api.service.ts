import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Artist} from "../models/artist";
import {Track} from "../models/track";
import {Observable} from "rxjs";
import {Artists} from "../models/artists";
import {Tracks} from "../models/Tracks";

@Injectable()
export class ApiService{

  constructor(private _http:HttpClient){}

  private BASE_URL_ARTIST = "http://localhost:8081/artist";
  private BASE_URL_TRACK = "http://localhost:8081/track";
  private BASE_TRACK_URL_FORMATTED = "http://localhost:8081/formattedTrack";
  private BASE_ARTIST_URL_FORMATTED = "http://localhost:8081/formattedArtist";

  private ALL_FAVOURITE_ARTIST= `${this.BASE_URL_ARTIST}\\all`;
  private ADD_FAVOURITE_ARTIST= `${this.BASE_URL_ARTIST}\\add`;
  private DELETE_FAVOURITE_ARTIST= `${this.BASE_URL_ARTIST}\\delete\\`;

  private ALL_FAVOURITE_TRACK= `${this.BASE_URL_TRACK}\\all`;
  private ADD_FAVOURITE_TRACK= `${this.BASE_URL_TRACK}\\add`;
  private DELETE_FAVOURITE_TRACK= `${this.BASE_URL_TRACK}\\delete\\`;

  private ALL_ARTIST= `${this.BASE_ARTIST_URL_FORMATTED}\\`;
  private ALL_TRACK= `${this.BASE_TRACK_URL_FORMATTED}\\`;


  getAllFavouriteArtists(): Observable<Artist[]>{
    return this._http.get<Artist[]>(this.ALL_FAVOURITE_ARTIST);
  }

  addFavouriteArtist(artist:Artist): Observable<Artist>{
    return this._http.post<Artist>(this.ADD_FAVOURITE_ARTIST, artist);
  }

  deleteFavouriteArtist(id: number): Observable<any>{
    return this._http.delete(this.DELETE_FAVOURITE_ARTIST + id);
  }

  getAllFavouriteTracks(): Observable<Track[]>{
    return this._http.get<Track[]>(this.ALL_FAVOURITE_TRACK);
  }

  addFavouriteTrack(track:Track): Observable<Track> {
    return this._http.post<Track>(this.ADD_FAVOURITE_TRACK, track);
  }

  deleteFavouriteTrack(id: number): Observable<any>{
    return this._http.delete(this.DELETE_FAVOURITE_TRACK + id);
  }
  getAllArtists(name:string): Observable<Artists[]>{
    return this._http.get<Artists[]>(this.ALL_ARTIST + name);
  }
  getAllTracks(name:string): Observable<Tracks[]>{
    return this._http.get<Tracks[]>(this.ALL_TRACK + name);
  }
}
