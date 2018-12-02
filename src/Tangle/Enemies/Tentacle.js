import { Enemy } from "../../Models/Enemy";

export class Tentacle extends Enemy{
	constructor(){
		super();
		
		this.dbId = "tentacle";
		
		this.model = {
			hp: 110,
			bp: 100,
			attack: 18,
			magic: 12
		};
	}
}
