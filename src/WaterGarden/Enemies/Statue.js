import { Enemy } from "../../Models/Enemy";

export class Statue extends Enemy{
	constructor(){
		super();
		
		this.dbId = "statue";
	}
}
