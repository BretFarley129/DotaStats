import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from './../match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  constructor(private _matchService: MatchService) { 
    this.setHeroes(this.players)
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
  // Retrieve data from API, put into values
  findMatch(){
    // alert(this.number.value);
    event.preventDefault();
    this.match_id = this.number.value;
    this.match_info = 'done';
    this._matchService.getMatchData(this.match_id).subscribe(
      (response) => {
        console.log(response)
        this.match_info = response.json();
        this.players = this.match_info.players;
        this.setHeroes(this.players);
        let minutes = Math.floor(this.match_info.duration / 60);
        let seconds = this.match_info.duration % 60;
        this.match_length = `${minutes}:${seconds}`
        this.searches ++;
        // alert(this.players)
      },
      (err) => {
        console.log('error occured')
        console.log(err);
      }
    );
  }
  //Take array of players, convert into heroes
  setHeroes(arr){
    // alert('here')
    for (let i = 0; i < arr.length; i ++){
        if(this.players[i].hero_id == 1)
          this.players[i].hero = 'Anti-Mage'
        else if(this.players[i].hero_id == 2)
          this.players[i].hero = 'Axe'
        else if(this.players[i].hero_id == 3)
          this.players[i].hero = 'Bane'
        else if(this.players[i].hero_id == 4)
          this.players[i].hero = 'Bloodseeker'
        else if(this.players[i].hero_id == 5)
          this.players[i].hero = 'Crystal Maiden'
        else if(this.players[i].hero_id == 6)
          this.players[i].hero = 'Drow Ranger'
        else if(this.players[i].hero_id == 7)
          this.players[i].hero = 'Earthshaker'
        else if(this.players[i].hero_id == 8)
          this.players[i].hero = 'Juggernaut'
        else if(this.players[i].hero_id == 9)
          this.players[i].hero = 'Mirana'
        else if(this.players[i].hero_id == 10)
          this.players[i].hero = 'Morphling'
        else if(this.players[i].hero_id == 11)
          this.players[i].hero = 'Shadow Fiend'
        else if(this.players[i].hero_id == 12)
          this.players[i].hero = 'Phantom Lancer'
        else if(this.players[i].hero_id == 13)
          this.players[i].hero = 'Puck'
        else if(this.players[i].hero_id == 14)
          this.players[i].hero = 'Pudge'
        else if(this.players[i].hero_id == 15)
          this.players[i].hero = 'Razor'
        else if(this.players[i].hero_id == 16)
          this.players[i].hero = 'Sand King'
        else if(this.players[i].hero_id == 17)
          this.players[i].hero = 'Storm Spirit'
        else if(this.players[i].hero_id == 18)
          this.players[i].hero = 'Sven'
        else if(this.players[i].hero_id == 19)
          this.players[i].hero = 'Tiny'
        else if(this.players[i].hero_id == 20)
          this.players[i].hero = 'Vengeful Spirit'
        else if(this.players[i].hero_id == 21)
          this.players[i].hero = 'Windranger'
        else if(this.players[i].hero_id == 22)
          this.players[i].hero = 'Zeus'
        else if(this.players[i].hero_id == 23)
          this.players[i].hero = 'Kunkka'
        else if(this.players[i].hero_id == 24)
          this.players[i].hero = 'Sven'
        else if(this.players[i].hero_id == 25)
          this.players[i].hero = 'Lina'
        else if(this.players[i].hero_id == 26)
          this.players[i].hero = 'Lion'
        else if(this.players[i].hero_id == 27)
          this.players[i].hero = 'Shadow Shaman'
        else if(this.players[i].hero_id == 28)
          this.players[i].hero = 'Slardar'
        else if(this.players[i].hero_id == 29)
          this.players[i].hero = 'Tidehunter'
        else if(this.players[i].hero_id == 30)
          this.players[i].hero = 'Witch Doctor'
        else if(this.players[i].hero_id == 31)
          this.players[i].hero = 'Lich'
        else if(this.players[i].hero_id == 32)
          this.players[i].hero = 'Riki'
        else if(this.players[i].hero_id == 33)
          this.players[i].hero = 'Enigma'
        else if(this.players[i].hero_id == 34)
          this.players[i].hero = 'Tinker'
        else if(this.players[i].hero_id == 35)
          this.players[i].hero = 'Sniper'
        else if(this.players[i].hero_id == 36)
          this.players[i].hero = 'Necrophos'
        else if(this.players[i].hero_id == 37)
          this.players[i].hero = 'Warlock'
        else if(this.players[i].hero_id == 38)
          this.players[i].hero = 'Beastmaster'
        else if(this.players[i].hero_id == 39)
          this.players[i].hero = 'Queen of Pain'
        else if(this.players[i].hero_id == 40)
          this.players[i].hero = 'Venomancer'
        else if(this.players[i].hero_id == 41)
          this.players[i].hero = 'Faceless Void'
        else if(this.players[i].hero_id == 42)
          this.players[i].hero = 'Wraith King'
        else if(this.players[i].hero_id == 43)
          this.players[i].hero = 'Death Prophet'
        else if(this.players[i].hero_id == 44)
          this.players[i].hero = 'Phantom Assassin'
        else if(this.players[i].hero_id == 45)
          this.players[i].hero = 'Pugna'
        else if(this.players[i].hero_id == 46)
          this.players[i].hero = 'Templar Assassin'
        else if(this.players[i].hero_id == 47)
          this.players[i].hero = 'Viper'
        else if(this.players[i].hero_id == 48)
          this.players[i].hero = 'Luna'
        else if(this.players[i].hero_id == 49)
          this.players[i].hero = 'Dragon Knight'
        else if(this.players[i].hero_id == 50)
          this.players[i].hero = 'Dazzle'
        else if(this.players[i].hero_id == 51)
          this.players[i].hero = 'Clockwerk'
        else if(this.players[i].hero_id == 52)
          this.players[i].hero = 'Leshrac'
        else if(this.players[i].hero_id == 53)
          this.players[i].hero = "Nature's Prophet"
        else if(this.players[i].hero_id == 54)
          this.players[i].hero = 'Lelse ifestealer'
        else if(this.players[i].hero_id == 55)
          this.players[i].hero = 'Dark Seer'
        else if(this.players[i].hero_id == 56)
          this.players[i].hero = 'Clinkz'
        else if(this.players[i].hero_id == 57)
          this.players[i].hero = 'Omniknight'
        else if(this.players[i].hero_id == 58)
          this.players[i].hero = 'Enchantress'
        else if(this.players[i].hero_id == 59)
          this.players[i].hero = 'Huskar'
        else if(this.players[i].hero_id == 60)
          this.players[i].hero = 'Night Stalker'
        else if(this.players[i].hero_id == 61)
          this.players[i].hero = 'Broodmother'
        else if(this.players[i].hero_id == 62)
          this.players[i].hero = 'Bounty Hunter'
        else if(this.players[i].hero_id == 63)
          this.players[i].hero = 'Weaver'
        else if(this.players[i].hero_id == 64)
          this.players[i].hero = 'Jakiro'
        else if(this.players[i].hero_id == 65)
          this.players[i].hero = 'Batrider'
        else if(this.players[i].hero_id == 66)
          this.players[i].hero = 'Chen'
        else if(this.players[i].hero_id == 67)
          this.players[i].hero = 'Spectre'
        else if(this.players[i].hero_id == 68)
          this.players[i].hero = 'Ancient Apparition'
        else if(this.players[i].hero_id == 69)
          this.players[i].hero = 'Doom'
        else if(this.players[i].hero_id == 70)
          this.players[i].hero = 'Ursa'
        else if(this.players[i].hero_id == 71)
          this.players[i].hero = 'Spirit Breaker'
        else if(this.players[i].hero_id == 72)
          this.players[i].hero = 'Gyrocopter'
        else if(this.players[i].hero_id == 73)
          this.players[i].hero = 'Alchemist'
        else if(this.players[i].hero_id == 74)
          this.players[i].hero = 'Invoker'
        else if(this.players[i].hero_id == 75)
          this.players[i].hero = 'Silencer'
        else if(this.players[i].hero_id == 76)
          this.players[i].hero = 'Outworld Devourer'
        else if(this.players[i].hero_id == 77)
          this.players[i].hero = 'Lycan'
        else if(this.players[i].hero_id == 78)
          this.players[i].hero = 'Brewmaster'
        else if(this.players[i].hero_id == 79)
          this.players[i].hero = 'Shadow Demon'
        else if(this.players[i].hero_id == 80)
          this.players[i].hero = 'Lone Druid'
        else if(this.players[i].hero_id == 81)
          this.players[i].hero = 'Chaos Knight'
        else if(this.players[i].hero_id == 82)
          this.players[i].hero = 'Meepo'
        else if(this.players[i].hero_id == 83)
          this.players[i].hero = 'Treant Protector'
        else if(this.players[i].hero_id == 84)
          this.players[i].hero = 'Ogre Magi'
        else if(this.players[i].hero_id == 85)
          this.players[i].hero = 'Undying'
        else if(this.players[i].hero_id == 86)
          this.players[i].hero = 'Rubick'
        else if(this.players[i].hero_id == 87)
          this.players[i].hero = 'Disruptor'
        else if(this.players[i].hero_id == 88)
          this.players[i].hero = 'Nyx Assassin'
        else if(this.players[i].hero_id == 89)
          this.players[i].hero = 'Naga Siren'
        else if(this.players[i].hero_id == 90)
          this.players[i].hero = 'Keeper of the Light'
        else if(this.players[i].hero_id == 91)
          this.players[i].hero = 'Io'
        else if(this.players[i].hero_id == 92)
          this.players[i].hero = 'Visage'
        else if(this.players[i].hero_id == 93)
          this.players[i].hero = 'Slark'
        else if(this.players[i].hero_id == 94)
          this.players[i].hero = 'Medusa'
        else if(this.players[i].hero_id == 95)
          this.players[i].hero = 'Troll Warlord'
        else if(this.players[i].hero_id == 96)
          this.players[i].hero = 'Centaur Warrunner'
        else if(this.players[i].hero_id == 97)
          this.players[i].hero = 'Magnus'
        else if(this.players[i].hero_id == 98)
          this.players[i].hero = 'Timbersaw'
        else if(this.players[i].hero_id == 99)
          this.players[i].hero = 'Bristleback'
        else if(this.players[i].hero_id == 100)
          this.players[i].hero = 'Tusk'
        else if(this.players[i].hero_id == 101)
          this.players[i].hero = 'Skywrath Mage'
        else if(this.players[i].hero_id == 102)
          this.players[i].hero = 'Abaddon'
        else if(this.players[i].hero_id == 103)
          this.players[i].hero = 'Elder Titan'
        else if(this.players[i].hero_id == 104)
          this.players[i].hero = 'Legion Commander'
        else if(this.players[i].hero_id == 105)
          this.players[i].hero = 'Techies'
        else if(this.players[i].hero_id == 106)
          this.players[i].hero = 'Ember Spirit'
        else if(this.players[i].hero_id == 107)
          this.players[i].hero = 'Earth Spirit'
        else if(this.players[i].hero_id == 108)
          this.players[i].hero = 'Underlord'
        else if(this.players[i].hero_id == 109)
          this.players[i].hero = 'Terrorblade'
        else if(this.players[i].hero_id == 110)
          this.players[i].hero = 'Phoenix'
        else if(this.players[i].hero_id == 111)
          this.players[i].hero = 'Oracle'
        else if(this.players[i].hero_id == 112)
          this.players[i].hero = 'Winter Wyvern'
        else if(this.players[i].hero_id == 113)
          this.players[i].hero = 'Arc Warden'
        else if(this.players[i].hero_id == 114)
          this.players[i].hero = 'Monkey King'
        else if(this.players[i].hero_id == 119)
          this.players[i].hero = 'Dark Willow'
        else if(this.players[i].hero_id == 120)
          this.players[i].hero = 'Pangolier'
        else if(this.players[i].hero_id == 121)
          this.players[i].hero = 'Grimstroke'
        // else if(this.players[i].hero_id == 122:
        //   this.players[i].hero = 'Mars'
      
    }
  }
}
