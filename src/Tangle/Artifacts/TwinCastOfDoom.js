import { Artifact } from "../../Models/Artifact";

export class ArtifactTwinCastOfDoom extends Artifact{
	constructor(){
		super();
		// The unique ID of this artifact to store in the database
		this.dbId = "ty-twincast-of-doom";
		this.artifact = {
			name: "TwInCaStOfDoOm",
			effectName: "absolute_immunity",
			defense: 999,
			magic: 999,
			accuracy: 999,
			attack: 999,
			speed: 999,
			luck: 999,
			owned: 0,
			cost: 999999,
			type: ["twinCast", "haste", "healOnDamage", "improvedRegen", "enhancer", "slashAll", "vampire"],
			classes: [0, 1, 2, 3],
			info: "Dev artifact. Put on at your own peril!"
		};
	}
}
