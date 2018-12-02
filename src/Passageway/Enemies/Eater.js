import { Enemy } from "../../Models/Enemy";

export class Eater extends Enemy{
	constructor(){
		super();
		
		this.dbId = "eater";
	}
}
