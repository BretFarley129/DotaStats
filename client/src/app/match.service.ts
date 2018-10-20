import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable()
export class MatchService {

  constructor(private _http: Http) { };

  getMatchData(match){
    return this._http.get(`https://api.opendota.com/api/matches/${match}`);
  };
  getPlayerData(player){
    return this._http.get(`https://api.opendota.com/api/players/${player}`);
  };
  getPlayerMatches(player){
    return this._http.get(`https://api.opendota.com/api/players/${player}/matches?significant=0`);
  };
  getWinLoss(player){
    return this._http.get(`https://api.opendota.com/api/players/${player}/wl`);
  };
  getCounts(player){
    return this._http.get(`https://api.opendota.com/api/players/${player}/counts`);
  };
}
