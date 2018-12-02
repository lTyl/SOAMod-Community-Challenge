import { Enemy } from "../../Models/Enemy";

export class TentacleImproved extends Enemy{
	constructor(){
		super();
		
		this.dbId = "tentacleImproved";
		this.model = {
			hp: 500,
			bp: 1000,
			attack: 1,
			defense: 6,
			magic: 10
		};
	}
}
