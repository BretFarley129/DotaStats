import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import "rxjs";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class InfoService {

  constructor(private _http: Http, private router: Router) { }

  getAbility(params){
    console.log('in info service')
    console.log(params)
    return this._http.get('getAbility', params);
  }

  abilityNames(arr){
    return this._http.post('getAbility', arr)
  }

  heroInfo(arr){
    return this._http.post('getHeroes', arr)
  }

}
