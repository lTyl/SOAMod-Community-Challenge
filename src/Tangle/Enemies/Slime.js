import { Enemy } from "../../Models/Enemy";

export class Slime extends Enemy {
	constructor(){
		super();
		/**
		 * The curator will use this value to pull the enemy data from the database.
		 *
		 * Then, it will call Slime.update(data) with the enemy data.
		 */
		this.dbId = "slime";
		
		/**
		 * - Change HP from 40 -> 80
		 * - Change Attack from 1 -> 8
		 * - Change defense from 2 -> 4
		 * - Change speed from 4 -> 6
		 * - Add 50% Thunder resistance
		 * - Add a shield artifact
		 */
		this.model = {
			hp: 80,
			bp: Infinity,
			attack: 8,
			defense: 4,
			speed: 6,
			magic: 6,
			immunity: [
				{name: 'thunder', modifier: 0.50},
				{ name: 'ice', modifier: .5 }
			],
			accessoryID: "enemy_lshield_self"
		};
	}
}