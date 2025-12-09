export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
  asone: {
    onTryHit(pokemon, target, move) {
			if (move.flags['bullet']) {
				this.add('-immune', pokemon, '[from] ability: Bulletproof');
				return null;
      }
    },
      onAnyModifyBoost(boosts, pokemon) {
			const unawareUser = this.effectState.target;
			if (unawareUser === pokemon) return;
			if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['def'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
    },
    flags: { breakable: 1 },
    name: "As One",
    shortDesc: "Placeholder text. Ping Eclipse or Ashryn if you see this",
    longDesc: "Placeholder text. Ping Eclipse or Ashryn if you see this",
  },
},
    
      
