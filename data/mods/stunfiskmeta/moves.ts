export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	uturn: {
		inherit: true,
		basePower: 60
	},
	realbullet: {
		// unfinished, will finalize when i have the time - Eclipse
		accuracy: 100,
		basepower: 0,
		category: "Physical",
		name: "Real Bullet",
		pp: 1,
		priority: 0,
		flags: {},
		ohko: true,
		target: "normal",
		type: "Steel",
	},
}
