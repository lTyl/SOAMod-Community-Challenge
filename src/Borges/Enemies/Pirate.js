import { Enemy } from "../../Models/Enemy";

export class Pirate extends Enemy{
	constructor(){
		super();
		
		this.dbId = "pirate";
	}
}
