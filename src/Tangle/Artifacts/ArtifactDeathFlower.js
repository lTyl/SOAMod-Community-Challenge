import { Artifact } from "../../Models/Artifact";

export class ArtifactDeathFlower extends Artifact{
	constructor(){
		super();
		// The unique ID of this artifact to store in the database
		this.dbId = "ty-cc-deathflower";
		this.artifact = {
			name: "ENEMY-DEATHFLOWER",
			defense: 0,
			magic: 0,
			accuracy:0,
			attack: 0,
			speed: 0,
			luck: 0,
			owned: 0,
			cost: 4000,
			skillID: ['bloom0'],
			type: "callskill",
			classes: [0, 1, 2, 3],
			info: "DO NOT PUT THIS ON OMG"
		};
	}
}