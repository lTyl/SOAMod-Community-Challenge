import { Enemy } from "../../Models/Enemy";

export class Devourer extends Enemy{
	constructor(){
		super();
		
		this.dbId = "devourer";
	}
}
