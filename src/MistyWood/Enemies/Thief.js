import { Enemy } from "../../Models/Enemy";

export class Thief extends Enemy{
	constructor(){
		super();
		
		this.dbId = "thief";
	}
}
