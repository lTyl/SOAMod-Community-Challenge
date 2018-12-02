import { Enemy } from "../../Models/Enemy";

export class Crystal extends Enemy{
	constructor(){
		super();
		
		this.dbId = "crystal";
	}
}
