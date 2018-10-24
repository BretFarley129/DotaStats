import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from './../match.service'; 
import { InfoService } from './../info.service'; 
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  constructor(private _matchService: MatchService, private _infoService: InfoService, private _route: ActivatedRoute) { 
    
  }

  loaded = false;
  match_id;
  match_length;
  match_info ={radiant_win: null, players: null, duration: null, game_mode: '', chat: []};
  players = [];
  radiant = [];
  chat_log;
  dire = [];
  played_heroes = [];
  game_mode;
  game_modes = {
    "0": {
      "local": "Unknown",
      "id": 0,
      "name": "game_mode_unknown",
      "balanced": true
    },
    "1": {
      "local": "All Pick",
      "id": 1,
      "name": "game_mode_all_pick",
      "balanced": true
    },
    "2": {
      "local": "Captains Mode",
      "id": 2,
      "name": "game_mode_captains_mode",
      "balanced": true
    },
    "3": {
      "local": "Random Draft",
      "id": 3,
      "name": "game_mode_random_draft",
      "balanced": true
    },
    "4": {
      "local": "Single Draft",
      "id": 4,
      "name": "game_mode_single_draft",
      "balanced": true
    },
    "5": {
      "local": "All Random",
      "id": 5,
      "name": "game_mode_all_random",
      "balanced": true
    },
    "6": {
      "local": "Intro",
      "id": 6,
      "name": "game_mode_intro"
    },
    "7": {
      "local": "Diretide",
      "id": 7,
      "name": "game_mode_diretide"
    },
    "8": {
      "local": "Reverse Captains Mode",
      "id": 8,
      "name": "game_mode_reverse_captains_mode"
    },
    "9": {
      "local": "Greeviling",
      "id": 9,
      "name": "game_mode_greeviling"
    },
    "10": {
      "local": "Tutorial",
      "id": 10,
      "name": "game_mode_tutorial"
    },
    "11": {
      "local": "Mid Only",
      "id": 11,
      "name": "game_mode_mid_only"
    },
    "12": {
      "local": "Least Played",
      "id": 12,
      "name": "game_mode_least_played",
      "balanced": true
    },
    "13": {
      "local": "Limited Heroes",
      "id": 13,
      "name": "game_mode_limited_heroes"
    },
    "14": {
      "local": "Compendium matchmaking",
      "id": 14,
      "name": "game_mode_compendium_matchmaking"
    },
    "15": {
      "local": "Custom",
      "id": 15,
      "name": "game_mode_custom"
    },
    "16": {
      "local": "Captains Draft",
      "id": 16,
      "name": "game_mode_captains_draft",
      "balanced": true
    },
    "17": {
      "local": "Balanced Draft",
      "id": 17,
      "name": "game_mode_balanced_draft",
      "balanced": true
    },
    "18": {
      "local": "Ability Draft",
      "id": 18,
      "name": "game_mode_ability_draft"
    },
    "19": {
      "local": "Event Game",
      "id": 19,
      "name": "game_mode_event"
    },
    "20": {
      "local": "All Random Death Match",
      "id": 20,
      "name": "game_mode_all_random_death_match"
    },
    "21": {
      "local": "1v1 Mid",
      "id": 21,
      "name": "game_mode_1v1_mid"
    },
    "22": {
      "local": "All Draft",
      "id": 22,
      "name": "game_mode_all_draft",
      "balanced": true
    },
    "23": {
      "local": "Turbo",
      "id": 23,
      "name": "game_mode_turbo"
    },
    "24": {
      "local": "Mutation",
      "id": 24,
      "name": "game_mode_mutation"
    }
  };

  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      console.log({location: 'match component', match_id: params.get('id')});
      this.match_id = params.get('id');
      this.findMatch();
    })
    
  }

  // Retrieve data from API, put into values
  findMatch(){
    // event.preventDefault();
    this._matchService.getMatchData(this.match_id).subscribe(
      (response) => {
        this.match_info = response.json();
        console.log({match_deets: this.match_info});
        this.players = this.match_info.players;
        this.game_mode = this.game_modes[this.match_info.game_mode];
        this.chat_log = this.match_info.chat;

        // Set various info for individual players
        let player_heroes = [];
        for (var i = 0; i < this.players.length; i ++){
          if (!this.players[i].personaname){
            this.players[i].personaname = false;
          }
          let total = this.players[i].kills + this.players[i].assists + this.players[i].deaths
          this.players[i].percentages = {
            kills: (this.players[i].kills / total)*100,
            deaths: (this.players[i].deaths / total)*100,
            assists: (this.players[i].assists / total)*100,
          }
          this.players[i].chat = [];
          player_heroes.push(this.players[i].hero_id)
        }
        this._infoService.chatInfo(this.chat_log).subscribe(
          (data)=>{
            console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
            this.chat_log = data.json();
            console.log(this.chat_log)
            console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
            // Assign individual chats
            for (let i = 0; i < this.chat_log.length; i ++){
              let said_by_index = this.chat_log[i].slot;
              this.players[said_by_index].chat.push(this.chat_log[i])
            }
          },
          (err)=>{
            console.log('error occurred grabbing chat information');
            console.log(err);
          }
        ); // End Chat subscription
        this._infoService.heroInfo(player_heroes).subscribe(
          (data)=>{
            console.log(data.json());
            let heroes_info = data.json();
            for (let i = 0; i < this.players.length; i++){
              this.players[i].hero_info = heroes_info[i]
            };
          },
          (err)=>{
            console.log('error occurred while fetching hero info')
            console.log(err)
          }
        )

        if (this.game_mode.id == 18) { //Ability draft check
          let ability_log = []; //for storing all abilities in the game, in order of players
          // Add abilities
          for (let i = 0; i < this.players.length; i++){ 
            ability_log.push(this.players[i].ability_upgrades_arr)
          }
          console.log(ability_log);
          // Request ability names from backend
          this._infoService.abilityNames(ability_log).subscribe(
            (data)=>{
              console.log('retrieved ability names')
              console.log(data.json())
              ability_log = data.json();
              for ( let i = 0; i < ability_log.length; i ++){
                this.players[i].abilities = ability_log[i];
              }
            },
            (err)=>{
              console.log('something went wrong');
              console.log(err)
            }
          ) //End subscription
        } //End Ability draft check

        //Break up players into teams
        this.radiant = this.players.slice(0, 5);
        this.dire = this.players.slice(5);
        
        console.log({radiant: this.radiant});
        console.log({dire: this.dire});
        console.log(this.game_mode)
        // SET TIME FOR MATCH
        let minutes = Math.floor(this.match_info.duration / 60);
        let seconds = this.match_info.duration % 60;
        if (seconds < 10){
          this.match_length = `${minutes}:0${seconds}`
        }
        else{
          this.match_length = `${minutes}:${seconds}`
        }
        this.loaded = true;
      }, //End subscription response
      (err) => {
        console.log('error occured')
        console.log(err);
      } //End subscription err
    ); // End SUBSCRIPTION
  } // END FUNCTION
}
