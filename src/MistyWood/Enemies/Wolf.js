import { Enemy } from "../../Models/Enemy";

export class Wolf extends Enemy{
	constructor(){
		super();
		
		this.dbId = "wolf";
	}
}
