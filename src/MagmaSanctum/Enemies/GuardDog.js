import { Enemy } from "../../Models/Enemy";

export class GuardDog extends Enemy{
	constructor(){
		super();
		
		this.dbId = "guard_dog";
	}
}
