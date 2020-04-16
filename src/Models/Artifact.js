export class Artifact {
	constructor(){
		this.artifact = {};
		this.dbId = "";
	}
	update(artifactData){
		if (!artifactData){
			window.ig.global.stats.artifacts.list[this.dbId] = new Accessory(this.artifact);
			window.ig.global.accessories.list[this.dbId] = new Accessory(this.artifact);
			console.log(`Artifact: ${this.dbId} has been added to the database! Use ig.global.accessories.addEquip(${this.dbId}, 1) to add it to your inventory!`);
		} else {
			for (let key in this.artifact){
				artifactData[key] = this.artifact[key];
			}
		}
	}
}
