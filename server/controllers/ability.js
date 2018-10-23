// var mongoose = require('mongoose');
// var Cap = mongoose.model('Cap');


module.exports = {
  
  getAbility: function(req, res){
    console.log('in backend');
    // console.log(req.body);
    // let names = [];
    // for (let i = 0; i < req.body.length; i++){
    //     if(this.abilities[req.body[i]]){
    //         console.log(this.abilities[req.body[i]])  
    //         names.push(this.abilities[req.body[i]])
    //     }
    // }
    // console.log(names);
    // res.json(names)
    let response = [];
    for (let i = 0; i < req.body.length; i++){
        let names = [];
        let checker = {};
        for (let k = 0; k < req.body[i].length; k ++){
            if (this.abilities[req.body[i][k]] && !checker[req.body[i][k]]){
                names.push(this.abilities[req.body[i][k]]);
                checker[req.body[i][k]] = true;
            }
        }
        while(names.length < 4){
            names.push('tiny_toss_tree')
        }
        console.log(`${i}-----------------------`)
        console.log(names);
        response.push(names);
    };
    res.json(response)
  },

    abilities: {
        "5002": "attribute_bonus",
        "5003": "antimage_mana_break",
        "5004": "antimage_blink",
        "5005": "antimage_spell_shield",
        "5006": "antimage_mana_void",
        "5007": "axe_berserkers_call",
        "5008": "axe_battle_hunger",
        "5009": "axe_counter_helix",
        "5010": "axe_culling_blade",
        "5011": "bane_brain_sap",
        "5012": "bane_enfeeble",
        "5013": "bane_fiends_grip",
        "5014": "bane_nightmare",
        "5015": "bloodseeker_bloodrage",
        "5016": "bloodseeker_blood_bath",
        "5017": "bloodseeker_thirst",
        "5018": "bloodseeker_rupture",
        "5019": "drow_ranger_frost_arrows",
        "5020": "drow_ranger_silence",
        "5021": "drow_ranger_trueshot",
        "5022": "drow_ranger_marksmanship",
        "5023": "earthshaker_fissure",
        "5024": "earthshaker_enchant_totem",
        "5025": "earthshaker_aftershock",
        "5026": "earthshaker_echo_slam",
        "5027": "juggernaut_blade_dance",
        "5028": "juggernaut_blade_fury",
        "5029": "juggernaut_healing_ward",
        "5030": "juggernaut_omni_slash",
        "5031": "kunkka_torrent",
        "5032": "kunkka_tidebringer",
        "5033": "kunkka_x_marks_the_spot",
        "5034": "kunkka_return",
        "5035": "kunkka_ghostship",
        "5040": "lina_dragon_slave",
        "5041": "lina_light_strike_array",
        "5042": "lina_fiery_soul",
        "5043": "lina_laguna_blade",
        "5044": "lion_impale",
        "5045": "lion_voodoo",
        "5046": "lion_mana_drain",
        "5047": "lion_finger_of_death",
        "5048": "mirana_arrow",
        "5049": "mirana_invis",
        "5050": "mirana_leap",
        "5051": "mirana_starfall",
        "5052": "morphling_waveform",
        "5053": "morphling_adaptive_strike_agi",
        "5054": "morphling_morph",
        "5055": "morphling_morph_agi",
        "5056": "morphling_morph_str",
        "5057": "morphling_replicate",
        "5058": "morphling_morph_replicate",
        "5059": "nevermore_shadowraze1",
        "5060": "nevermore_shadowraze2",
        "5061": "nevermore_shadowraze3",
        "5062": "nevermore_necromastery",
        "5063": "nevermore_dark_lord",
        "5064": "nevermore_requiem",
        "5065": "phantom_lancer_spirit_lance",
        "5066": "phantom_lancer_doppelwalk",
        "5067": "phantom_lancer_juxtapose",
        "5068": "phantom_lancer_phantom_edge",
        "5069": "puck_illusory_orb",
        "5070": "puck_ethereal_jaunt",
        "5071": "puck_waning_rift",
        "5072": "puck_phase_shift",
        "5073": "puck_dream_coil",
        "5074": "pudge_flesh_heap",
        "5075": "pudge_meat_hook",
        "5076": "pudge_rot",
        "5077": "pudge_dismember",
        "5078": "shadow_shaman_ether_shock",
        "5079": "shadow_shaman_voodoo",
        "5080": "shadow_shaman_shackles",
        "5081": "shadow_shaman_mass_serpent_ward",
        "5082": "razor_plasma_field",
        "5083": "razor_static_link",
        "5084": "razor_unstable_current",
        "5085": "razor_eye_of_the_storm",
        "5086": "skeleton_king_hellfire_blast",
        "5087": "skeleton_king_vampiric_aura",
        "5088": "skeleton_king_mortal_strike",
        "5089": "skeleton_king_reincarnation",
        "5090": "death_prophet_carrion_swarm",
        "5091": "death_prophet_silence",
        "5092": "death_prophet_witchcraft",
        "5093": "death_prophet_exorcism",
        "5094": "sven_storm_bolt",
        "5095": "sven_great_cleave",
        "5096": "sven_warcry",
        "5097": "sven_gods_strength",
        "5098": "storm_spirit_static_remnant",
        "5099": "storm_spirit_electric_vortex",
        "5100": "storm_spirit_overload",
        "5101": "storm_spirit_ball_lightning",
        "5102": "sandking_burrowstrike",
        "5103": "sandking_sand_storm",
        "5104": "sandking_caustic_finale",
        "5105": "sandking_epicenter",
        "5106": "tiny_avalanche",
        "5107": "tiny_toss",
        "5108": "tiny_craggy_exterior",
        "5109": "tiny_grow",
        "5110": "zuus_arc_lightning",
        "5111": "zuus_lightning_bolt",
        "5112": "zuus_static_field",
        "5113": "zuus_thundergods_wrath",
        "5114": "slardar_sprint",
        "5115": "slardar_slithereen_crush",
        "5116": "slardar_bash",
        "5117": "slardar_amplify_damage",
        "5118": "tidehunter_gush",
        "5119": "tidehunter_kraken_shell",
        "5120": "tidehunter_anchor_smash",
        "5121": "tidehunter_ravage",
        "5122": "vengefulspirit_magic_missile",
        "5123": "vengefulspirit_command_aura",
        "5124": "vengefulspirit_wave_of_terror",
        "5125": "vengefulspirit_nether_swap",
        "5126": "crystal_maiden_crystal_nova",
        "5127": "crystal_maiden_frostbite",
        "5128": "crystal_maiden_brilliance_aura",
        "5129": "crystal_maiden_freezing_field",
        "5130": "windrunner_shackleshot",
        "5131": "windrunner_powershot",
        "5132": "windrunner_windrun",
        "5133": "windrunner_focusfire",
        "5134": "lich_frost_nova",
        "5135": "lich_frost_armor",
        "5136": "lich_dark_ritual",
        "5137": "lich_chain_frost",
        "5138": "witch_doctor_paralyzing_cask",
        "5139": "witch_doctor_voodoo_restoration",
        "5140": "witch_doctor_maledict",
        "5141": "witch_doctor_death_ward",
        "5142": "riki_smoke_screen",
        "5143": "riki_blink_strike",
        "5144": "riki_permanent_invisibility",
        "5145": "riki_tricks_of_the_trade",
        "5146": "enigma_malefice",
        "5147": "enigma_demonic_conversion",
        "5148": "enigma_midnight_pulse",
        "5149": "enigma_black_hole",
        "5150": "tinker_laser",
        "5151": "tinker_heat_seeking_missile",
        "5152": "tinker_march_of_the_machines",
        "5153": "tinker_rearm",
        "5154": "sniper_shrapnel",
        "5155": "sniper_headshot",
        "5156": "sniper_take_aim",
        "5157": "sniper_assassinate",
        "5158": "necrolyte_death_pulse",
        "5159": "necrolyte_heartstopper_aura",
        "5160": "necrolyte_sadist",
        "5161": "necrolyte_reapers_scythe",
        "5162": "warlock_fatal_bonds",
        "5163": "warlock_shadow_word",
        "5164": "warlock_upheaval",
        "5165": "warlock_rain_of_chaos",
        "5166": "warlock_golem_flaming_fists",
        "5167": "warlock_golem_permanent_immolation",
        "5168": "beastmaster_wild_axes",
        "5169": "beastmaster_call_of_the_wild",
        "5170": "beastmaster_hawk_invisibility",
        "5171": "beastmaster_boar_poison",
        "5172": "beastmaster_inner_beast",
        "5173": "queenofpain_shadow_strike",
        "5174": "queenofpain_blink",
        "5175": "queenofpain_scream_of_pain",
        "5176": "queenofpain_sonic_wave",
        "5177": "beastmaster_primal_roar",
        "5178": "venomancer_venomous_gale",
        "5179": "venomancer_poison_sting",
        "5180": "venomancer_plague_ward",
        "5181": "venomancer_poison_nova",
        "5182": "faceless_void_time_walk",
        "5183": "faceless_void_backtrack",
        "5184": "faceless_void_time_lock",
        "5185": "faceless_void_chronosphere",
        "5186": "pugna_nether_blast",
        "5187": "pugna_decrepify",
        "5188": "pugna_nether_ward",
        "5189": "pugna_life_drain",
        "5190": "phantom_assassin_stifling_dagger",
        "5191": "phantom_assassin_phantom_strike",
        "5192": "phantom_assassin_blur",
        "5193": "phantom_assassin_coup_de_grace",
        "5194": "templar_assassin_refraction",
        "5195": "templar_assassin_meld",
        "5196": "templar_assassin_psi_blades",
        "5197": "templar_assassin_psionic_trap",
        "5198": "templar_assassin_trap",
        "5199": "templar_assassin_self_trap",
        "5213": "roshan_spell_block",
        "5214": "roshan_bash",
        "5215": "roshan_slam",
        "5216": "roshan_inherent_buffs",
        "5217": "roshan_devotion",
        "5218": "viper_poison_attack",
        "5219": "viper_nethertoxin",
        "5220": "viper_corrosive_skin",
        "5221": "viper_viper_strike",
        "5222": "luna_lucent_beam",
        "5223": "luna_moon_glaive",
        "5224": "luna_lunar_blessing",
        "5225": "luna_eclipse",
        "5226": "dragon_knight_breathe_fire",
        "5227": "dragon_knight_dragon_tail",
        "5228": "dragon_knight_dragon_blood",
        "5229": "dragon_knight_elder_dragon_form",
        "5232": "dragon_knight_frost_breath",
        "5233": "dazzle_poison_touch",
        "5234": "dazzle_shallow_grave",
        "5235": "dazzle_shadow_wave",
        "5236": "dazzle_weave",
        "5237": "rattletrap_battery_assault",
        "5238": "rattletrap_power_cogs",
        "5239": "rattletrap_rocket_flare",
        "5240": "rattletrap_hookshot",
        "5241": "leshrac_split_earth",
        "5242": "leshrac_diabolic_edict",
        "5243": "leshrac_lightning_storm",
        "5244": "leshrac_pulse_nova",
        "5245": "furion_sprout",
        "5246": "furion_teleportation",
        "5247": "furion_force_of_nature",
        "5248": "furion_wrath_of_nature",
        "5249": "life_stealer_rage",
        "5250": "life_stealer_feast",
        "5251": "life_stealer_open_wounds",
        "5252": "life_stealer_infest",
        "5253": "life_stealer_consume",
        "5255": "dark_seer_vacuum",
        "5256": "dark_seer_ion_shell",
        "5257": "dark_seer_surge",
        "5258": "dark_seer_wall_of_replica",
        "5259": "clinkz_strafe",
        "5260": "clinkz_searing_arrows",
        "5261": "clinkz_wind_walk",
        "5262": "clinkz_death_pact",
        "5263": "omniknight_purification",
        "5264": "omniknight_repel",
        "5265": "omniknight_degen_aura",
        "5266": "omniknight_guardian_angel",
        "5267": "enchantress_untouchable",
        "5268": "enchantress_enchant",
        "5269": "enchantress_natures_attendants",
        "5270": "enchantress_impetus",
        "5271": "huskar_inner_vitality",
        "5272": "huskar_burning_spear",
        "5273": "huskar_berserkers_blood",
        "5274": "huskar_life_break",
        "5275": "night_stalker_void",
        "5276": "night_stalker_crippling_fear",
        "5277": "night_stalker_hunter_in_the_night",
        "5278": "night_stalker_darkness",
        "5279": "broodmother_spawn_spiderlings",
        "5280": "broodmother_spin_web",
        "5281": "broodmother_incapacitating_bite",
        "5282": "broodmother_insatiable_hunger",
        "5283": "broodmother_spawn_spiderite",
        "5284": "broodmother_poison_sting",
        "5285": "bounty_hunter_shuriken_toss",
        "5286": "bounty_hunter_jinada",
        "5287": "bounty_hunter_wind_walk",
        "5288": "bounty_hunter_track",
        "5289": "weaver_the_swarm",
        "5290": "weaver_shukuchi",
        "5291": "weaver_geminate_attack",
        "5292": "weaver_time_lapse",
        "5293": "kobold_taskmaster_speed_aura",
        "5294": "centaur_khan_endurance_aura",
        "5295": "centaur_khan_war_stomp",
        "5296": "gnoll_assassin_envenomed_weapon",
        "5297": "jakiro_dual_breath",
        "5298": "jakiro_ice_path",
        "5299": "jakiro_liquid_fire",
        "5300": "jakiro_macropyre",
        "5301": "ghost_frost_attack",
        "5302": "polar_furbolg_ursa_warrior_thunder_clap",
        "5303": "neutral_spell_immunity",
        "5304": "ogre_magi_frost_armor",
        "5305": "dark_troll_warlord_ensnare",
        "5306": "dark_troll_warlord_raise_dead",
        "5307": "giant_wolf_critical_strike",
        "5308": "alpha_wolf_critical_strike",
        "5309": "alpha_wolf_command_aura",
        "5310": "tornado_tempest",
        "5312": "enraged_wildkin_tornado",
        "5313": "enraged_wildkin_toughness_aura",
        "5319": "harpy_storm_chain_lightning",
        "5320": "batrider_sticky_napalm",
        "5321": "batrider_flamebreak",
        "5322": "batrider_firefly",
        "5323": "batrider_flaming_lasso",
        "5328": "chen_penitence",
        "5329": "chen_test_of_faith",
        "5330": "chen_holy_persuasion",
        "5331": "chen_hand_of_god",
        "5334": "spectre_spectral_dagger",
        "5335": "spectre_desolate",
        "5336": "spectre_dispersion",
        "5337": "spectre_haunt",
        "5338": "spectre_reality",
        "5339": "doom_bringer_devour",
        "5340": "doom_bringer_scorched_earth",
        "5341": "doom_bringer_infernal_blade",
        "5342": "doom_bringer_doom",
        "5343": "doom_bringer_empty1",
        "5344": "doom_bringer_empty2",
        "5345": "ancient_apparition_cold_feet",
        "5346": "ancient_apparition_ice_vortex",
        "5347": "ancient_apparition_chilling_touch",
        "5348": "ancient_apparition_ice_blast",
        "5349": "ancient_apparition_ice_blast_release",
        "5350": "backdoor_protection",
        "5351": "backdoor_protection_in_base",
        "5352": "beastmaster_greater_boar_poison",
        "5353": "spirit_breaker_charge_of_darkness",
        "5354": "spirit_breaker_empowering_haste",
        "5355": "spirit_breaker_greater_bash",
        "5356": "spirit_breaker_nether_strike",
        "5357": "ursa_earthshock",
        "5358": "ursa_overpower",
        "5359": "ursa_fury_swipes",
        "5360": "ursa_enrage",
        "5361": "gyrocopter_rocket_barrage",
        "5362": "gyrocopter_homing_missile",
        "5363": "gyrocopter_flak_cannon",
        "5364": "gyrocopter_call_down",
        "5365": "alchemist_acid_spray",
        "5366": "alchemist_unstable_concoction",
        "5367": "alchemist_unstable_concoction_throw",
        "5368": "alchemist_goblins_greed",
        "5369": "alchemist_chemical_rage",
        "5370": "invoker_quas",
        "5371": "invoker_wex",
        "5372": "invoker_exort",
        "5373": "invoker_empty1",
        "5374": "invoker_empty2",
        "5375": "invoker_invoke",
        "5376": "invoker_cold_snap",
        "5377": "silencer_curse_of_the_silent",
        "5378": "silencer_glaives_of_wisdom",
        "5379": "silencer_last_word",
        "5380": "silencer_global_silence",
        "5381": "invoker_ghost_walk",
        "5382": "invoker_tornado",
        "5383": "invoker_emp",
        "5384": "invoker_alacrity",
        "5385": "invoker_chaos_meteor",
        "5386": "invoker_sun_strike",
        "5387": "invoker_forge_spirit",
        "5388": "forged_spirit_melting_strike",
        "5389": "invoker_ice_wall",
        "5390": "invoker_deafening_blast",
        "5391": "obsidian_destroyer_arcane_orb",
        "5392": "obsidian_destroyer_astral_imprisonment",
        "5393": "obsidian_destroyer_essence_aura",
        "5394": "obsidian_destroyer_sanity_eclipse",
        "5395": "lycan_summon_wolves",
        "5396": "lycan_howl",
        "5397": "lycan_feral_impulse",
        "5398": "lycan_shapeshift",
        "5399": "lycan_summon_wolves_critical_strike",
        "5400": "brewmaster_thunder_clap",
        "5401": "brewmaster_drunken_haze",
        "5402": "brewmaster_drunken_brawler",
        "5403": "brewmaster_primal_split",
        "5404": "brewmaster_earth_hurl_boulder",
        "5405": "brewmaster_earth_spell_immunity",
        "5406": "brewmaster_earth_pulverize",
        "5408": "brewmaster_storm_dispel_magic",
        "5409": "brewmaster_storm_cyclone",
        "5410": "brewmaster_storm_wind_walk",
        "5411": "brewmaster_fire_permanent_immolation",
        "5412": "lone_druid_spirit_bear",
        "5413": "lone_druid_rabid",
        "5414": "lone_druid_savage_roar",
        "5415": "lone_druid_true_form",
        "5416": "lone_druid_true_form_druid",
        "5417": "lone_druid_true_form_battle_cry",
        "5418": "lone_druid_spirit_bear_return",
        "5419": "lone_druid_spirit_bear_entangle",
        "5420": "lone_druid_spirit_bear_demolish",
        "5421": "shadow_demon_disruption",
        "5422": "shadow_demon_soul_catcher",
        "5423": "shadow_demon_shadow_poison",
        "5424": "shadow_demon_shadow_poison_release",
        "5425": "shadow_demon_demonic_purge",
        "5426": "chaos_knight_chaos_bolt",
        "5427": "chaos_knight_reality_rift",
        "5428": "chaos_knight_chaos_strike",
        "5429": "chaos_knight_phantasm",
        "5430": "meepo_earthbind",
        "5431": "meepo_poof",
        "5432": "meepo_geostrike",
        "5433": "meepo_divided_we_stand",
        "5434": "treant_natures_guise",
        "5435": "treant_leech_seed",
        "5436": "treant_living_armor",
        "5437": "treant_overgrowth",
        "5438": "ogre_magi_fireblast",
        "5439": "ogre_magi_ignite",
        "5440": "ogre_magi_bloodlust",
        "5441": "ogre_magi_multicast",
        "5442": "undying_decay",
        "5443": "undying_soul_rip",
        "5444": "undying_tombstone",
        "5445": "undying_tombstone_zombie_aura",
        "5446": "undying_tombstone_zombie_deathstrike",
        "5447": "undying_flesh_golem",
        "5448": "rubick_telekinesis",
        "5449": "rubick_telekinesis_land",
        "5450": "rubick_fade_bolt",
        "5451": "rubick_null_field",
        "5452": "rubick_spell_steal",
        "5453": "rubick_empty1",
        "5454": "rubick_empty2",
        "5455": "rubick_hidden1",
        "5456": "rubick_hidden2",
        "5457": "rubick_hidden3",
        "5458": "disruptor_thunder_strike",
        "5459": "disruptor_glimpse",
        "5460": "disruptor_kinetic_field",
        "5461": "disruptor_static_storm",
        "5462": "nyx_assassin_impale",
        "5463": "nyx_assassin_mana_burn",
        "5464": "nyx_assassin_spiked_carapace",
        "5465": "nyx_assassin_vendetta",
        "5466": "ogre_magi_unrefined_fireblast",
        "5467": "naga_siren_mirror_image",
        "5468": "naga_siren_ensnare",
        "5469": "naga_siren_rip_tide",
        "5470": "naga_siren_song_of_the_siren",
        "5471": "keeper_of_the_light_illuminate",
        "5472": "keeper_of_the_light_mana_leak",
        "5473": "keeper_of_the_light_chakra_magic",
        "5474": "keeper_of_the_light_spirit_form",
        "5475": "keeper_of_the_light_recall",
        "5476": "keeper_of_the_light_blinding_light",
        "5477": "keeper_of_the_light_illuminate_end",
        "5478": "naga_siren_song_of_the_siren_cancel",
        "5479": "keeper_of_the_light_spirit_form_illuminate",
        "5480": "visage_grave_chill",
        "5481": "visage_soul_assumption",
        "5482": "visage_gravekeepers_cloak",
        "5483": "visage_summon_familiars",
        "5484": "visage_summon_familiars_stone_form",
        "5485": "wisp_tether",
        "5486": "wisp_spirits",
        "5487": "wisp_overcharge",
        "5488": "wisp_relocate",
        "5489": "wisp_tether_break",
        "5490": "wisp_spirits_in",
        "5491": "forest_troll_high_priest_mana_aura",
        "5492": "courier_go_to_secretshop",
        "5493": "wisp_spirits_out",
        "5494": "slark_dark_pact",
        "5495": "slark_pounce",
        "5496": "slark_essence_shift",
        "5497": "slark_shadow_dance",
        "5500": "lycan_summon_wolves_invisibility",
        "5501": "keeper_of_the_light_empty1",
        "5502": "keeper_of_the_light_empty2",
        "5503": "keeper_of_the_light_spirit_form_illuminate_end",
        "5504": "medusa_split_shot",
        "5505": "medusa_mystic_snake",
        "5506": "medusa_mana_shield",
        "5507": "medusa_stone_gaze",
        "5508": "troll_warlord_berserkers_rage",
        "5509": "troll_warlord_whirling_axes_ranged",
        "5510": "troll_warlord_whirling_axes_melee",
        "5511": "troll_warlord_fervor",
        "5512": "troll_warlord_battle_trance",
        "5514": "centaur_hoof_stomp",
        "5515": "centaur_double_edge",
        "5516": "centaur_return",
        "5517": "centaur_stampede",
        "5518": "magnataur_shockwave",
        "5519": "magnataur_empower",
        "5520": "magnataur_skewer",
        "5521": "magnataur_reverse_polarity",
        "5522": "chen_test_of_faith_teleport",
        "5523": "bane_nightmare_end",
        "5524": "shredder_whirling_death",
        "5525": "shredder_timber_chain",
        "5526": "shredder_reactive_armor",
        "5527": "shredder_chakram",
        "5528": "shredder_return_chakram",
        "5548": "bristleback_viscous_nasal_goo",
        "5549": "bristleback_quill_spray",
        "5550": "bristleback_bristleback",
        "5551": "bristleback_warpath",
        "5565": "tusk_ice_shards",
        "5566": "tusk_snowball",
        "5567": "tusk_frozen_sigil",
        "5568": "tusk_walrus_punch",
        "5577": "throw_snowball",
        "5578": "throw_coal",
        "5579": "healing_campfire",
        "5581": "skywrath_mage_arcane_bolt",
        "5582": "skywrath_mage_concussive_shot",
        "5583": "skywrath_mage_ancient_seal",
        "5584": "skywrath_mage_mystic_flare",
        "5585": "abaddon_death_coil",
        "5586": "abaddon_aphotic_shield",
        "5587": "abaddon_frostmourne",
        "5588": "abaddon_borrowed_time",
        "5589": "elder_titan_echo_stomp",
        "5590": "elder_titan_echo_stomp_spirit",
        "5591": "elder_titan_ancestral_spirit",
        "5592": "elder_titan_return_spirit",
        "5593": "elder_titan_natural_order",
        "5594": "elder_titan_earth_splitter",
        "5595": "legion_commander_overwhelming_odds",
        "5596": "legion_commander_press_the_attack",
        "5597": "legion_commander_moment_of_courage",
        "5598": "legion_commander_duel",
        "5599": "techies_land_mines",
        "5600": "techies_stasis_trap",
        "5601": "techies_suicide",
        "5602": "techies_remote_mines",
        "5603": "ember_spirit_searing_chains",
        "5604": "ember_spirit_sleight_of_fist",
        "5605": "ember_spirit_flame_guard",
        "5606": "ember_spirit_fire_remnant",
        "5607": "ember_spirit_activate_fire_remnant",
        "5608": "earth_spirit_boulder_smash",
        "5609": "earth_spirit_rolling_boulder",
        "5610": "earth_spirit_geomagnetic_grip",
        "5611": "earth_spirit_stone_caller",
        "5612": "earth_spirit_magnetize",
        "5613": "abyssal_underlord_firestorm",
        "5614": "abyssal_underlord_pit_of_malice",
        "5615": "abyssal_underlord_atrophy_aura",
        "5616": "abyssal_underlord_dark_rift",
        "5617": "abyssal_underlord_cancel_dark_rift",
        "5618": "roshan_halloween_spell_block",
        "5619": "terrorblade_reflection",
        "5620": "terrorblade_conjure_image",
        "5621": "terrorblade_metamorphosis",
        "5622": "terrorblade_sunder",
        "5623": "phoenix_icarus_dive",
        "5624": "phoenix_icarus_dive_stop",
        "5625": "phoenix_fire_spirits",
        "5626": "phoenix_sun_ray",
        "5627": "phoenix_sun_ray_stop",
        "5628": "phoenix_sun_ray_toggle_move",
        "5630": "phoenix_supernova",
        "5631": "phoenix_launch_fire_spirit",
        "5632": "drow_ranger_wave_of_silence",
        "5635": "techies_focused_detonate",
        "5636": "techies_remote_mines_self_detonate",
        "5637": "oracle_fortunes_end",
        "5638": "oracle_fates_edict",
        "5639": "oracle_purifying_flames",
        "5640": "oracle_false_promise",
        "5641": "tusk_launch_snowball",
        "5642": "courier_morph",
        "5643": "broodmother_spin_web_destroy",
        "5644": "techies_minefield_sign",
        "5645": "shredder_chakram_2",
        "5646": "shredder_return_chakram_2",
        "5648": "earth_spirit_petrify",
        "5649": "treant_eyes_in_the_forest",
        "5650": "shoot_firework",
        "5651": "winter_wyvern_arctic_burn",
        "5652": "winter_wyvern_splinter_blast",
        "5653": "winter_wyvern_cold_embrace",
        "5654": "winter_wyvern_winters_curse",
        "5655": "life_stealer_control",
        "5656": "granite_golem_hp_aura",
        "5657": "life_stealer_empty_1",
        "5658": "life_stealer_empty_2",
        "5659": "life_stealer_empty_3",
        "5660": "life_stealer_empty_4",
        "5661": "cny_beast_force_attack",
        "5662": "cny2015_sonic_wave",
        "5663": "cny2015_black_hole",
        "5664": "cny2015_chronosphere",
        "5665": "cny_beast_teleport",
        "5666": "nyx_assassin_burrow",
        "5667": "mud_golem_rock_destroy",
        "5668": "tusk_ice_shards_stop",
        "5669": "ability_deward",
        "5670": "mud_golem_hurl_boulder",
        "5671": "life_stealer_assimilate",
        "5672": "tusk_walrus_kick",
        "5673": "nyx_assassin_unburrow",
        "5674": "morphling_hybrid",
        "5675": "life_stealer_assimilate_eject",
        "5676": "courier_take_stash_and_transfer_items",
        "5677": "arc_warden_flux",
        "5678": "arc_warden_magnetic_field",
        "5679": "arc_warden_spark_wraith",
        "5680": "granite_golem_bash",
        "5681": "black_dragon_dragonhide_aura",
        "5682": "big_thunder_lizard_wardrums_aura",
        "5683": "arc_warden_tempest_double",
        "5684": "obsidian_destroyer_mind_over_matter",
        "5685": "death_prophet_spirit_siphon",
        "5686": "ancient_golem_rockslide",
        "5687": "lone_druid_savage_roar_bear",
        "5688": "mudgolem_cloak_aura",
        "5689": "black_dragon_fireball",
        "5690": "invoker_attribute_bonus",
        "5691": "faceless_void_time_dilation",
        "5716": "monkey_king_boundless_strike",
        "5719": "monkey_king_mischief",
        "5721": "monkey_king_tree_dance",
        "5722": "monkey_king_untransform",
        "5723": "monkey_king_jingu_mastery",
        "5724": "monkey_king_primal_spring",
        "5725": "monkey_king_wukongs_command",
        "5726": "monkey_king_primal_spring_early",
        "5750": "elder_titan_natural_order_spirit",
        "6125": "spawnlord_aura",
        "6126": "spawnlord_master_bash",
        "6226": "filler_ability",
        "6251": "generic_hidden",
        "6270": "spawnlord_master_stomp",
        "6278": "spawnlord_master_freeze",
        "6316": "necrolyte_sadist_stop",
        "6325": "zuus_cloud",
        "6328": "courier_transfer_items_to_other_player",
        "6329": "courier_go_to_enemy_secretshop",
        "6333": "courier_go_to_sideshop",
        "6334": "courier_go_to_sideshop2",
        "6339": "dark_willow_bramble_maze",
        "6340": "dark_willow_bedlam",
        "6341": "dark_willow_shadow_realm",
        "6342": "dark_willow_cursed_crown",
        "6343": "pangolier_gyroshell",
        "6344": "pangolier_swashbuckle",
        "6346": "pangolier_heartpiercer",
        "6459": "pangolier_gyroshell_stop",
        "6461": "pangolier_shield_crash",
        "6491": "grimstroke_soul_chain",
        "6937": "tiny_toss_tree",
        "7000": "morphling_adaptive_strike_str",
        "7116": "visage_stone_form_self_cast",
        "8000": "grimstroke_dark_artistry",
        "8006": "grimstroke_ink_creature",
        "8007": "grimstroke_spirit_walk",
        "8203": "necronomicon_archer_purge",
        "8340": "dark_willow_terrorize"
    
    }   

}