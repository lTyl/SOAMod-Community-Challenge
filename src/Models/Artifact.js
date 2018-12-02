export class Artifact {
	constructor(){
		this.artifact = {};
		this.dbId = "";
	}
	update(artifactData){
		for (let key in this.artifact){
			artifactData[key] = this.artifact[key];
		}
	}
}