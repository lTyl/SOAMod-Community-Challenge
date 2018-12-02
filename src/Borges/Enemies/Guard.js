import { Enemy } from "../../Models/Enemy";

export class Guard extends Enemy{
	constructor(){
		super();
		
		this.dbId = "guard";
	}
}
