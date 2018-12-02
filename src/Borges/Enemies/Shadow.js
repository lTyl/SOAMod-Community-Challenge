import { Enemy } from "../../Models/Enemy";

export class Shadow extends Enemy{
	constructor(){
		super();
		
		this.dbId = "shadow";
	}
}
