import { Enemy } from "../../Models/Enemy";

export class Ghost extends Enemy{
	constructor(){
		super();
		
		this.dbId = "ghost";
	}
}
