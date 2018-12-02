import { Enemy } from "../../Models/Enemy";

export class DeathFlower extends Enemy{
	constructor(){
		super();
		
		this.dbId = "deathflower";
		
		this.model = {
			hp: 900,
			bp: 1000,
			accessoryID: "ty-cc-deathflower"
		};
	}
}
