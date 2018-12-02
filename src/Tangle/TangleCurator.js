import { Slime } from "./Enemies/Slime";
import { DeathFlower } from "./Enemies/DeathFlower";
import { Tentacle } from "./Enemies/Tentacle";
import { TentacleImproved } from "./Enemies/TentacleImproved";
import { Wasp } from "./Enemies/Wasp";
import { Curator } from "../Models/Curator";

export class TangleCurator extends Curator{
	constructor(){
		super();
		this.enemies = {
			slime: new Slime(),
			deathflower: new DeathFlower(),
			tentacle: new Tentacle(),
			tentacleImproved: new TentacleImproved(),
			wasp: new Wasp()
		};
	}
}

export const tangleCurator = new TangleCurator();