import { Enemy } from "../../Models/Enemy";

export class Wasp extends Enemy{
	constructor(){
		super();
		
		this.dbId = "wasp";
		
		this.model = {
			hp: 90,
			bp: 2000,
			attack: 12,
			defense: 4,
			speed: 9,
			magic: 5,
			aiScript: "ty_wasp_community_challengeAI"
		};
		
	}
}
