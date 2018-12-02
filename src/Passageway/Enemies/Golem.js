import { Enemy } from "../../Models/Enemy";

export class Golem extends Enemy{
	constructor(){
		super();
		
		this.dbId = "golem";
	}
}
