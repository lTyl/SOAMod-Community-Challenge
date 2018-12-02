export class Artifact {
	constructor(){
		this.artifact = {};
		this.dbId = "";
	}
	update(artifactData){
		if (!artifactData){
			window.ig.global.stats.artifacts.list[this.dbId] = this.artifact;
		} else {
			for (let key in this.artifact){
				artifactData[key] = this.artifact[key];
			}
		}
	}
}