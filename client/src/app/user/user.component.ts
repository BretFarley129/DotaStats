import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from './../match.service'; 
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _matchService: MatchService, private _route: ActivatedRoute) { }

  player_id;
  player;
  profile;
  matches;
  all_matches;
  record = {win: 0, lose: 0, percent: ''};
  current_page = 1;
  page = {
    page_length : 100
  };
  page_length = 100;
  num_pages;
  page_list = [];
  heroes = {
    1: {id: 1, name: "antimage", localized_name: "Anti-Mage"},
    2: {id: 2, name: "axe", localized_name: "Axe"},
    3: {id: 3, name: "bane", localized_name: "Bane"},
    4: {id: 4, name: "bloodseeker", localized_name: "Bloodseeker"},
    5: {id: 5, name: "crystal_maiden", localized_name: "Crystal Maiden"},
    6: {id: 6, name: "drow_ranger", localized_name: "Drow Ranger"},
    7: {id: 7, name: "earthshaker", localized_name: "Earthshaker"},
    8: {id: 8, name: "juggernaut", localized_name: "Juggernaut"},
    9: {id: 9, name: "mirana", localized_name: "Mirana"},
    10: {id: 10, name: "morphling", localized_name: "Morphling"},
    11: {id: 11, name: "nevermore", localized_name: "Shadow Fiend"},
    12: {id: 12, name: "phantom_lancer", localized_name: "Phantom Lancer"},
    13: {id: 13, name: "puck", localized_name: "Puck"},
    14: {id: 14, name: "pudge", localized_name: "Pudge"},
    15: {id: 15, name: "razor", localized_name: "Razor"},
    16: {id: 16, name: "sand_king", localized_name: "Sand King"},
    17: {id: 17, name: "storm_spirit", localized_name: "Storm Spirit"},
    18: {id: 18, name: "sven", localized_name: "Sven"},
    19: {id: 19, name: "tiny", localized_name: "Tiny"},
    20: {id: 20, name: "vengefulspirit", localized_name: "Vengeful Spirit"},
    21: {id: 21, name: "windrunner", localized_name: "Windranger"},
    22: {id: 22, name: "zuus", localized_name: "Zeus"},
    23: {id: 23, name: "kunkka", localized_name: "Kunkka"},
    25: {id: 25, name: "lina", localized_name: "Lina"},
    26: {id: 26, name: "lion", localized_name: "Lion"},
    27: {id: 27, name: "shadow_shaman", localized_name: "Shadow Shaman"},
    28: {id: 28, name: "slardar", localized_name: "Slardar"},
    29: {id: 29, name: "tidehunter", localized_name: "Tidehunter"},
    30: {id: 30, name: "witch_doctor", localized_name: "Witch Doctor"},
    31: {id: 31, name: "lich", localized_name: "Lich"},
    32: {id: 32, name: "riki", localized_name: "Riki"},
    33: {id: 33, name: "enigma", localized_name: "Enigma"},
    34: {id: 34, name: "tinker", localized_name: "Tinker"},
    35: {id: 35, name: "sniper", localized_name: "Sniper"},
    36: {id: 36, name: "necrolyte", localized_name: "Necrophos"},
    37: {id: 37, name: "warlock", localized_name: "Warlock"},
    38: {id: 38, name: "beastmaster", localized_name: "Beastmaster"},
    39: {id: 39, name: "queenofpain", localized_name: "Queen of Pain"},
    40: {id: 40, name: "venomancer", localized_name: "Venomancer"},
    41: {id: 41, name: "faceless_void", localized_name: "Faceless Void"},
    42: {id: 42, name: "skeleton_king", localized_name: "Wraith King"},
    43: {id: 43, name: "death_prophet", localized_name: "Death Prophet"},
    44: {id: 44, name: "phantom_assassin", localized_name: "Phantom Assassin"},
    45: {id: 45, name: "pugna", localized_name: "Pugna"},
    46: {id: 46, name: "templar_assassin", localized_name: "Templar Assassin"},
    47: {id: 47, name: "viper", localized_name: "Viper"},
    48: {id: 48, name: "luna", localized_name: "Luna"},
    49: {id: 49, name: "dragon_knight", localized_name: "Dragon Knight"},
    50: {id: 50, name: "dazzle", localized_name: "Dazzle"},
    51: {id: 51, name: "rattletrap", localized_name: "Clockwerk"},
    52: {id: 52, name: "leshrac", localized_name: "Leshrac"},
    53: {id: 53, name: "furion", localized_name: "Nature's Prophet"},
    54: {id: 54, name: "life_stealer", localized_name: "Lifestealer"},
    55: {id: 55, name: "dark_seer", localized_name: "Dark Seer"},
    56: {id: 56, name: "clinkz", localized_name: "Clinkz"},
    57: {id: 57, name: "omniknight", localized_name: "Omniknight"},
    58: {id: 58, name: "enchantress", localized_name: "Enchantress"},
    59: {id: 59, name: "huskar", localized_name: "Huskar"},
    60: {id: 60, name: "night_stalker", localized_name: "Night Stalker"},
    61: {id: 61, name: "broodmother", localized_name: "Broodmother"},
    62: {id: 62, name: "bounty_hunter", localized_name: "Bounty Hunter"},
    63: {id: 63, name: "weaver", localized_name: "Weaver"},
    64: {id: 64, name: "jakiro", localized_name: "Jakiro"},
    65: {id: 65, name: "batrider", localized_name: "Batrider"},
    66: {id: 66, name: "chen", localized_name: "Chen"},
    67: {id: 67, name: "spectre", localized_name: "Spectre"},
    68: {id: 68, name: "ancient_apparition", localized_name: "Ancient Apparition"},
    69: {id: 69, name: "doom_bringer", localized_name: "Doom"},
    70: {id: 70, name: "ursa", localized_name: "Ursa"},
    71: {id: 71, name: "spirit_breaker", localized_name: "Spirit Breaker"},
    72: {id: 72, name: "gyrocopter", localized_name: "Gyrocopter"},
    73: {id: 73, name: "alchemist", localized_name: "Alchemist"},
    74: {id: 74, name: "invoker", localized_name: "Invoker"},
    75: {id: 75, name: "silencer", localized_name: "Silencer"},
    76: {id: 76, name: "obsidian_destroyer", localized_name: "Outworld Devourer"},
    77: {id: 77, name: "lycan", localized_name: "Lycan"},
    78: {id: 78, name: "brewmaster", localized_name: "Brewmaster"},
    79: {id: 79, name: "shadow_demon", localized_name: "Shadow Demon"},
    80: {id: 80, name: "lone_druid", localized_name: "Lone Druid"},
    81: {id: 81, name: "chaos_knight", localized_name: "Chaos Knight"},
    82: {id: 82, name: "meepo", localized_name: "Meepo"},
    83: {id: 83, name: "treant", localized_name: "Treant Protector"},
    84: {id: 84, name: "ogre_magi", localized_name: "Ogre Magi"},
    85: {id: 85, name: "undying", localized_name: "Undying"},
    86: {id: 86, name: "rubick", localized_name: "Rubick"},
    87: {id: 87, name: "disruptor", localized_name: "Disruptor"},
    88: {id: 88, name: "nyx_assassin", localized_name: "Nyx Assassin"},
    89: {id: 89, name: "naga_siren", localized_name: "Naga Siren"},
    90: {id: 90, name: "keeper_of_the_light", localized_name: "Keeper of the Light"},
    91: {id: 91, name: "wisp", localized_name: "Io"},
    92: {id: 92, name: "visage", localized_name: "Visage"},
    93: {id: 93, name: "slark", localized_name: "Slark"},
    94: {id: 94, name: "medusa", localized_name: "Medusa"},
    95: {id: 95, name: "troll_warlord", localized_name: "Troll Warlord"},
    96: {id: 96, name: "centaur", localized_name: "Centaur Warrunner"},
    97: {id: 97, name: "magnataur", localized_name: "Magnus"},
    98: {id: 98, name: "shredder", localized_name: "Timbersaw"},
    99: {id: 99, name: "bristleback", localized_name: "Bristleback"},
    100: {id: 100, name: "tusk", localized_name: "Tusk"},
    101: {id: 101, name: "skywrath_mage", localized_name: "Skywrath Mage"},
    102: {id: 102, name: "abaddon", localized_name: "Abaddon"},
    103: {id: 103, name: "elder_titan", localized_name: "Elder Titan"},
    104: {id: 104, name: "legion_commander", localized_name: "Legion Commander"},
    105: {id: 105, name: "techies", localized_name: "Techies"},
    106: {id: 106, name: "ember_spirit", localized_name: "Ember Spirit"},
    107: {id: 107, name: "earth_spirit", localized_name: "Earth Spirit"},
    108: {id: 108, name: "abyssal_underlord", localized_name: "Underlord"},
    109: {id: 109, name: "terrorblade", localized_name: "Terrorblade"},
    110: {id: 110, name: "phoenix", localized_name: "Phoenix"},
    111: {id: 111, name: "oracle", localized_name: "Oracle"},
    112: {id: 112, name: "winter_wyvern", localized_name: "Winter Wyvern"},
    113: {id: 113, name: "arc_warden", localized_name: "Arc Warden"},
    114: {id: 114, name: "monkey_king", localized_name: "Monkey King"},
    119: {id: 119, name: "dark_willow", localized_name: "Dark Willow"},
    120: {id: 120, name: "pangolier", localized_name: "Pangolier"},
    121: {id: 121, name: "grimstroke", localized_name: "Grimstroke"}
  };
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
      console.log({location: 'user component', user_id: params.get('id')});
      this.player_id = params.get('id');
      this.findPlayer();
      this.playerMatches();
      this.winLoss();
    })
  }

  findPlayer(){
    this._matchService.getPlayerData(this.player_id).subscribe(
      (response) => {
        this.player = response.json();
        this.profile = this.player.profile;
        console.log({info: 'profile', data: this.profile})
        console.log({info: 'player', data: this.player})

      },
      (err) => {
        console.log('error occured')
        console.log(err);
      }
    );
  }

  playerMatches(){
    this._matchService.getPlayerMatches(this.player_id).subscribe(
      (response) => {
        this.matches = response.json();
        this.all_matches = response.json();
        console.log({info: 'matches', data: this.matches})
        this.setTimes();
        this.setPages();

      },
      (err) => {
        console.log('error occured')
        console.log(err);
      }
    );
  }

  winLoss(){
    this._matchService.getWinLoss(this.player_id).subscribe(
      (response) => {
        this.record = response.json();
        let perc = ((this.record.win / (this.record.win + this.record.lose))*100).toFixed(2);
        // perc = (perc*100).toFixed(2)
        this.record.percent = perc;
        console.log({info: 'w/l', data: this.record});
      },
      (err) => {
        console.log('error occured')
        console.log(err); 
      }
    );
  }

  setTimes(){
    for (var i = 0; i < this.matches.length; i++){
      let minutes = Math.floor(this.matches[i].duration / 60);
      let seconds = this.matches[i].duration % 60;
      if (seconds < 10){
        this.matches[i].match_length = `${minutes}:0${seconds}`
      }
      else{
        this.matches[i].match_length = `${minutes}:${seconds}`
      }
    }
  }
  setPages(){
    //this can be reformatted into 2 functions that could lessen user side computing
    console.log('test');
    this.page_list = [];
    this.num_pages = Math.ceil(this.matches.length / this.page.page_length);
    for (let i = 1; i <= this.num_pages; i++){
      this.page_list.push(i);
    }
    if( this.current_page > this.page_list.length){
      this.current_page = this.page_list.length;
    }
  }

  selectPage(page_number){
    this.current_page = page_number;
  }
  
}
