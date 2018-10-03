import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable()
export class MatchService {

  constructor(private _http: Http) { }

  getMatchData(match){
    return this._http.get(`https://api.opendota.com/api/matches/${match}`);
  }
}
