import { Slime } from "./Enemies/Slime";

export class TangleCurator {
	constructor(){
		this.slime = new Slime();
		
		this.update();
	}
	
	update(){
		this.slime.update(window.ig.global.stats.enemies.list[this.slime.dbId]);
	}
}

export const tangleCurator = new TangleCurator();