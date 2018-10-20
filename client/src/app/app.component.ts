import { Component } from '@angular/core';
import { MatchService } from './match.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _matchService: MatchService, private router: Router) { 
  }

  number = {
    value: 0
  }
  match_id = 0;
  searches = 0;
  match_length;
  match_info;
  players = [];
  hero_ids = [];
  heroes = [];
  ngOnInit() {
    
  }

  findMatch(){
    // alert(this.number.value);
    event.preventDefault();
    this.match_id = this.number.value;
    this.match_info = 'done';
    this._matchService.getMatchData(this.match_id).subscribe(
      (response) => {
        // console.log(response)
        // this.match_info = response.json();
        // this.players = this.match_info.players;
        // this.setHeroes(this.players);
        // let minutes = Math.floor(this.match_info.duration / 60);
        // let seconds = this.match_info.duration % 60;
        // this.match_length = `${minutes}:${seconds}`
        // this.searches ++;
        this.router.navigate([`matches/${this.match_id}`]);
        // alert(this.players)
      },
      (err) => {
        console.log('error occured')
        console.log(err);
      }
    );
  }
}
